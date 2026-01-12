# Backend + WebSocket - Live Attendance System

##### Tech Stack: Node.js, Express, MongoDB, Mongoose, Zod, JWT, bcrypt, ws (WebSocket)

## Overview

Build a complete backend system with:

- Authentication (signup, login, me)
- Role-based access control (teacher & student)
- Class management CRUD
- WebSocket-based live attendance
- Attendance persistence to MongoDB

**Key Assumption:** Only **ONE class session** can be active at a time on WebSocket. No room management needed - all broadcasts go to all connected clients.
<br>

## Response Format Standard

### Success Response

```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
}
```
All HTTP responses MUST follow this format!

<br>

## JWT Authentication

### JWT Payload Structure

```json
{
  "userId": "MONGODB_OBJECT_ID",
  "role": "teacher" | "student"
}
```

### HTTP Requests

Send token via header:

```
Authorization: <JWT_TOKEN>
```

### WebSocket Connection

```
ws://localhost:3000/ws?token=<JWT_TOKEN>
```
 

## 🗄️ MongoDB Models

### User Model

```jsx
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String, // hashed with bcrypt
  role: "teacher" | "student"
}
```

### Class Model

```jsx
{
  _id: ObjectId,
  className: String,
  teacherId: ObjectId, // reference to User
  studentIds: [ObjectId] // array of User references
}
```

### Attendance Model

```jsx
{
  _id: ObjectId,
  classId: ObjectId,
  studentId: ObjectId,
  status: "present" | "absent"
}
```

## Zod Validation & Error Codes

### Validation Error (400)

```json
{
  "success": false,
  "error": "Invalid request schema",
}
```

### Unauthorized (401)

```json
{
  "success": false,
  "error": "Unauthorized, token missing or invalid"
}
```

### Forbidden - Role Check (403)

```json
{
  "success": false,
  "error": "Forbidden, teacher access required"
}
```

### Forbidden - Ownership Check (403)

```json
{
  "success": false,
  "error": "Forbidden, not class teacher"
}
```

### Not Found (404)

```json
{
  "success": false,
  "error": "Class not found"
}

or 

{
  "success": false,
  "error": "User not found"
}

or

{
  "success": false,
  "error": "Student not found"
}
```

## In-Memory Attendance State

The server maintains a single global state for the active session:

```jsx
const activeSession = {
  classId: "c101", // current active class
  startedAt: "2025-03-11T10:00:00.000Z", // ISO string
  attendance: {
    "s100": "present",
    "s101": "absent"
    // studentId: status
  }
};
```

**Important:**

- `startedAt` must be ISO string: `new Date().toISOString()`
- `attendance` object stores status for each student
- Only ONE session active at a time

<br>

## HTTP API Routes

### 1. POST /auth/signup

**Zod Schema:**

```jsx
{
  name: string,
  email: email format
  password: string (min 6 chars),
  role:"teacher" | "student"
}
```

**Success (201):**

```json
{
  "success": true,
  "data": {
    "_id": "u123",
    "name": "Rahul",
    "email": "rahul@example.com",
    "role": "student"
  }
}
```
**Duplicate Email (400):**

```json
{
  "success": false,
  "error": "Email already exists"
}
```
<br>

### 2. POST /auth/login

**Zod Schema:**

```jsx
{
  email: email format,
  password: string
}
```

**Success (200):**

```json
{
  "success": true,
  "data": {
    "token": "JWT_TOKEN_HERE"
  }
}
```

**Invalid Credentials (400):**

```json
{
  "success": false,
  "error": "Invalid email or password"
}
```
<br>

### 3. GET /auth/me

**Auth Required:** Yes

**Success (200):**

```json
{
  "success": true,
  "data": {
    "_id": "u123",
    "name": "Rahul",
    "email": "rahul@example.com",
    "role": "student"
  }
}
```
<br>

### 4. POST /class

**Auth Required:** Yes (Teacher only)

**Zod Schema:**

```jsx
{
  className: string
}
```

**Success (201):**

```json
{
  "success": true,
  "data": {
    "_id": "c101",
    "className": "Maths 101",
    "teacherId": "t11",
    "studentIds": []
  }
}
```
<br>

### 5. POST /class/:id/add-student

**Auth Required:** Yes (Teacher only, must own the class)

**Zod Schema:**

```jsx
{
  studentId: string
}
```

**Success (200):**

```json
{
  "success": true,
  "data": {
    "_id": "c101",
    "className": "Maths 101",
    "teacherId": "t11",
    "studentIds": ["s100"]
  }
}
```
<br>

### 6. GET /class/:id

**Auth Required:** Yes (Teacher who owns class OR Student enrolled in class)

**Success (200):**

```json
{
  "success": true,
  "data": {
    "_id": "c101",
    "className": "Maths 101",
    "teacherId": "t11",
    "students": [
      {
        "_id": "s100",
        "name": "Rahul",
        "email": "rahul@test.com"
      }
    ]
  }
}
```

**Note:** Populate students array with full user details
<br>

### 7. GET /students

**Auth Required:** Yes (Teacher only)

**Success (200):**

```json
{
  "success": true,
  "data": [
    {
      "_id": "s100",
      "name": "Rahul",
      "email": "rahul@test.com"
    }
  ]
}
```

**Note:** Returns all users with role "student"
<br>

### 8. GET /class/:id/my-attendance

**Auth Required:** Yes (Student only, must be enrolled in class)

**Success (200) - Attendance Persisted:**

```json
{
  "success": true,
  "data": {
    "classId": "c101",
    "status": "present"
  }
}
```

**Success (200) - Not Persisted Yet:**

```json
{
  "success": true,
  "data": {
    "classId": "c101",
    "status": null
  }
}
```

**Note:** Check MongoDB Attendance collection for persisted record.
<br>

### 9. POST /attendance/start

**Auth Required:** Yes (Teacher only, must own the class)

**Zod Schema:**

```jsx
{
  classId: string
}
```

**Success (200):**

```json
{
  "success": true,
  "data": {
    "classId": "c101",
    "startedAt": "2025-03-11T10:00:00.000Z"
  }
}
```

**Purpose:** Starts a new attendance session. Sets the active class in memory. Only one session can be active at a time.

**Server Action:**

```jsx
activeSession = {
  classId: req.body.classId,
  startedAt: new Date().toISOString(),
  attendance: {}
};
```
<br>

# **WebSocket Server**

### Connection URL

```
ws://localhost:3000/ws?token=<JWT_TOKEN>
```

### Connection Setup (Server Side)

When a client connects:

1. **Extract token** from query parameter
2. **Verify JWT** - if invalid, send ERROR and close connection
3. **Attach user info** to WebSocket:
    
    ```jsx
    ws.user = {  userId: decoded.userId,  role: decoded.role};
    ```

4. Connection is now ready to receive/send messages

**No room management needed!** All messages broadcast to all connected clients.

<br>

### WebSocket Message Format

**All messages (client → server and server → client) use:**

```json
{
  "event": "EVENT_NAME",
  "data": { ... }
}
```

## 📡 WebSocket Events

### Event 1: ATTENDANCE_MARKED

**Direction:** Teacher → Server → Broadcast to ALL

**Teacher Sends:**

```json
{
  "event": "ATTENDANCE_MARKED",
  "data": {
    "studentId": "s100",
    "status": "present"
  }
}
```
**Server Actions:**

1. Verify `ws.user.role === "teacher"`
2. If `activeSession` is empty, send ERROR
3. Update in-memory:
    
    ```jsx
    activeSession.attendance[studentId] = status;
    ```

4. Broadcast to ALL connected clients

**Broadcast Message:**

```json
{
  "event": "ATTENDANCE_MARKED",
  "data": {
    "studentId": "s100",
    "status": "present"
  }
}
```

### Event 2: TODAY_SUMMARY

**Direction:** Teacher → Server → Broadcast to ALL

**Teacher Sends:**

```json
{
  "event": "TODAY_SUMMARY"
}
```

**Server Actions:**

1. Verify `ws.user.role === "teacher"`
2. Calculate from `activeSession.attendance`:
    
    ```jsx
    Hint: use .filter
    ```
<br>

1. Broadcast to ALL connected clients

**Broadcast Message:**

```json
{
  "event": "TODAY_SUMMARY",
  "data": {
    "present": 18,
    "absent": 4,
    "total": 22
  }
}
```
<br>

### Event 3: MY_ATTENDANCE

**Direction:** Student → Server → Response to THAT student only (unicast)

**Student Sends:**

```json
{
  "event": "MY_ATTENDANCE"
}
```

**Server Actions:**

1. Verify `ws.user.role === "student"`
2. Check `activeSession.attendance[ws.user.userId]`
3. Send response ONLY to the requesting socket (unicast)

**Response to Student:**

```json
{
  "event": "MY_ATTENDANCE",
  "data": {
    "status": "present"
  }
}
```

**If not marked yet:**

```json
{
  "event": "MY_ATTENDANCE",
  "data": {
    "status": "not yet updated"
  }
}
```
<br>

### Event 4: DONE

**Direction:** Teacher → Server → Persist to DB → Broadcast to ALL

**Teacher Sends:**

```json
{
  "event": "DONE"
}
```

**Server Actions:**

1. **Verify teacher role**
2. **Get all students in active class from mongo:**
3. **Mark absent students in memory:**
4. **Persist to MongoDB:**
5. **Calculate final summary:**
6. **Clear memory : clean up active session variable**
7. **Broadcast to ALL:**

**Broadcast Message:**

```json
{
  "event": "DONE",
  "data": {
    "message": "Attendance persisted",
    "present": 18,
    "absent": 4,
    "total": 22
  }
}
```

## WebSocket Error Handling

**Error Message Format:**

```json
{
  "event": "ERROR",
  "data": {
    "message": "Error description"
  }
}
```

**Common Errors:**

**Invalid JWT:**

```json
{
  "event": "ERROR",
  "data": {
    "message": "Unauthorized or invalid token"
  }
}
```

**Teacher-Only Event:**

```json
{
  "event": "ERROR",
  "data": {
    "message": "Forbidden, teacher event only"
  }
}
```

**Student-Only Event:**

```json
{
  "event": "ERROR",
  "data": {
    "message": "Forbidden, student event only"
  }
}
```


**No Active Session:**

```json
{
  "event": "ERROR",
  "data": {
    "message": "No active attendance session"
  }
}
```