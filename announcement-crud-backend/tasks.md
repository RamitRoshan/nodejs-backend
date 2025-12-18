# Tasks  

## MERN Functionality Assignment: “Admin-like Actions Without Routing” (Single Page CRUD Switcher)

Create a single-page React UI (no React Router) that lets a user perform Create / List / Update / Delete operations on a single MongoDB collection (example: Announcements). The purpose is to test full-stack CRUD, REST APIs, status codes, validation, and UI state management—all on one screen.

 

## A. Functional Goal

On one page, the user can switch a mode selector (dropdown or tabs): <br>
	•	Create  <br>
	•	List <br>
	•	Update  <br>
	•	Delete  <br>

Based on the selected mode, show the related UI section.<br> All actions must call your Express REST API, store/read from MongoDB, and update the UI without page refresh.

 

## B. Data Model (MongoDB Collection)

Use announcements collection. <br>

Announcement fields : <br>
	•	title (string) <br>
	•	description (string)  <br>
	•	priority (string: "low" | "medium" | "high") <br>
	•	isActive (boolean) <br>
	•	createdAt, updatedAt (timestamps) <br>

Validation Rules (backend must enforce) : <br>
	•	title: required, 3–60 chars <br>
	•	description: required, 10–250 chars <br>
	•	priority: required, must be one of low/medium/high <br>
	•	isActive: default true  <br>



## C. Backend Requirements (Node + Express)

**Endpoints :** <br>
1.	Create <br>
	•	POST /api/announcements <br>
	•	Validates body and stores in MongoDB <br>
	•	Success: 201 Created <br>

2.	List <br>
	•	GET /api/announcements <br>
	•	Supports query filters: <br>
	•	?active=true|false <br>
	•	?priority=low|medium|high <br>
	•	?q=keyword (search in title/description) <br>
	•	Success: 200 OK <br>

3.	Update <br>
	•	PUT /api/announcements/:id <br>
	•	Accepts updated fields (at least title/description/priority/isActive) <br>
	•	Success: 200 OK <br>
	•	If id not found: 404 Not Found <br>

4.	Delete <br>
	•	DELETE /api/announcements/:id <br>
	•	Success: 200 OK or 204 No Content <br>
	•	If id not found: 404 Not Found <br>

### **Error Response Shape (must be consistent)** <br>

•	**Validation error (400) :**

```
{
  "errors": {
    "title": "Title must be 3 to 60 characters",
    "description": "Description must be 10 to 250 characters"
  }
}
```

•	**Not found (404) :**


    { "message": "Announcement not found" }


•	**Server error (500) :**

    { "message": "Something went wrong" }

**Technical requirements :** <br>
	•	Use Mongoose model + timestamps <br>
	•	Enable CORS <br>
	•	Use proper status codes <br>
	•	Log create/update/delete actions to console <br>

 

## D. Frontend Requirements (React – single page)

**UI Layout (same page) :**

1.	Mode Selector <br>
	•	Dropdown: Create | List | Update | Delete <br>
	•	Switching modes must not change URL (no router). <br>

2.	Create Mode UI <br>
	•	Form with: title, description, priority, isActive <br>
	•	Submit calls POST /api/announcements <br>
	•	Show: <br>
	•	Inline field errors from backend <br>
	•	Success banner: “Created successfully” <br>
	•	After success: clear form and refresh list in memory (optional) <br>

3.	List Mode UI <br>
	•	Fetch list from backend on entering List mode (useEffect) <br>
	•	Display a table/cards with: <br>
	•	title, priority, isActive, createdAt <br>
	•	Include filter controls: <br>
	•	Active dropdown (all/true/false) <br>
	•	Priority dropdown <br>
	•	Search input (calls backend with q) <br>
	•	Must show loading + empty state <br>

4.	Update Mode UI <br>
	•	First select an announcement from a dropdown (populated from GET) <br>
	•	Auto-fill the edit form with selected record <br>
	•	On save → PUT /api/announcements/:id <br>
	•	Show success/error banners + inline field errors <br>

5.	Delete Mode UI <br>
	•	Select an announcement <br>
	•	Show a confirmation section (title + description) <br>
	•	Click Delete → DELETE /api/announcements/:id <br>
	•	Show success banner and remove item from UI list <br>

### **State Handling Rules** <br>
•	Use useState for: <br>
•	mode, form fields, selectedId, list data, filters, loading, errors, banners <br>
•	Use useEffect for: <br>
•	fetching list when mode becomes “List” <br>
•	refetching when filters/search change (debounced search optional) <br>

 

## E. Deliverables <br>

•	**Backend :** Express server + routes + controller/service + Mongoose model  <br>
•	**Frontend :** Single React page component implementing all 4 modes <br>

•	**README containing :** <br>
1.	environment variables (Mongo URI) <br>
2.	how to start backend and frontend <br>
3.	sample API requests + responses <br>

 
