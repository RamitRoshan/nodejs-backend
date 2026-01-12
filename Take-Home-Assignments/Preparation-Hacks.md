# Preparation Hacks : 

# How YOU Should Prepare (Exact Plan)

## ✅ Backend (Must-Have)

- Express folder structure
- JWT auth (login + middleware)
- MongoDB schema design
- CRUD APIs
- Proper HTTP status codes

## ✅ Frontend (Must-Have)

- React hooks
- Controlled forms
- API calls with async/await
- Conditional rendering
- Protected routes

## ✅ Full-Stack Glue

- Auth token flow (frontend ↔ backend)
- Error messages
- Loading states

<br>

# 🏗 HOW TO PREPARE (STEP-BY-STEP)

## Step 1: Design FIRST (Very Important)
**Backend Flow :**

    Client → Login → JWT → Auth Middleware → Protected API

## DB Design

- User
- Task (linked to userId)
**Draw this on paper before coding.**

## Step 2: Backend First (ALWAYS)

**Folder Structure :**

```
backend/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 ├─ config/
 └─ server.js
```

### Must-Have APIs

- POST /auth/register
- POST /auth/login
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

**👉 Test everything in Postman before frontend.**


## Step 3: Frontend (Only After APIs Work)

**React Structure :**
```
src/
 ├─ pages/
 ├─ components/
 ├─ services/ (API calls)
 ├─ context/ (auth)
 └─ App.js
```
### Rules

- One API call = one function
- Handle loading & error
- No logic in JSX

## Step 4: Act Like Interviewer Is Watching

**Ask yourself :**

- What happens if token expires?
- What if API fails?
- What if user accesses /dashboard without login?
- Handle basic cases, not everything.

## 🧑‍🏫 HOW TO WRITE CODE (MENTOR RULES)

**✅ Clean Code Rules :**

- Small functions
- Meaningful variable names
- No magic values
- Comments only where logic isn’t obvious

## 📘 README.md (THIS IMPRESSES)

**Include :**

- Project overview
- Tech stack
- Setup steps
- API routes
- Features
- Screenshots (of projects)

**📌 Interviewers read README first**

<br>

# What Companies ACTUALLY Evaluate (Important)

❌ Not UI beauty <br>
❌ Not advanced algorithms <br>

## ✅ They focus on:

- Project structure
- Code readability
- Git commits
- API naming
- Error handling
- Auth flow
- State management logic
- Can you explain your decisions?


## What Level They Expect (Reality Check)

Since you are a fresher / early-career MERN dev, they expect:

- Working app
- Clean basics
- Not perfect edge cases
- Not production-grade scaling

- ⚠️ 80% correctness > 100% features

<br>

# Must have this Mindset  

## 1. Think Like an Engineer, Not as a Student

❌ “How do I finish this fast?” <br>
✅ “How would this work in a real company?” <br>

**Before writing code, always ask:**

- Who is the user?
- What can go wrong?
- How will I explain this in interview?

## 2. Code Must Be Explainable

**If you can’t explain:**

- Why this folder exists
- Why this middleware exists
- Why this state exists

📌**then don’t write it...**



### HOW TO EXPLAIN IN INTERVIEW

**You should confidently say :**

`“I started with backend design, implemented JWT auth with middleware, tested APIs using Postman, then connected React using protected routes and context.”
If you can say this without fear, you’re ready.`