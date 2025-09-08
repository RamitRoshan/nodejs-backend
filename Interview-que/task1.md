# Build an HTTP Server Using Only Node.js (No Frameworks)

# Objective

Create a minimal HTTP server using only Node’s built-in http module (no Express/Koa/fastify or third-party libs). The server must expose routes that (1) send a welcome message, and (2) return an array of objects as JSON.

# Requirements  

Tech & Constraints
	•	Use Node.js and the core http module only.
	•	No external packages (no npm install).
	•	The server must listen on port 3000 (or use PORT from env if provided).
	•	Responses must include correct status codes and content-type headers.

Routes to Implement
	1.	GET /
	•	Purpose: Return a plain-text welcome message.
	•	Response: 200 OK, header Content-Type: text/plain, body like:

Welcome to the Node.js HTTP server!


	2.	GET /items
	•	Purpose: Return an array of objects as JSON.
	•	Details: Each object should have at least id (number) and name (string).
	•	Response: 200 OK, header Content-Type: application/json, body example:

[
  { "id": 1, "name": "Alpha" },
  { "id": 2, "name": "Beta" }
]


	3.	GET /health (optional)
	•	Purpose: Simple health check.
	•	Response: 200 OK, application/json, { "status": "up" }.

	4.	Any other route → 404 Not Found with a helpful message.

Error Handling
	•	Gracefully handle:

Acceptance Criteria
	•	Server starts without errors and logs the listening port.
	•	GET / returns the welcome text exactly as specified.
	•	GET /items returns a valid JSON array of objects.
	•	Appropriate headers and status codes are set for all responses.
	•	No third-party packages are used.

Example Interactions (for manual testing)

# Welcome
curl -i http://localhost:3000/

# Read items
curl -i http://localhost:3000/items


# Health (optional)
curl -i http://localhost:3000/health

# Unknown route
curl -i http://localhost:3000/does-not-exist

Deliverables
	•	server.js containing all logic (no other files required).
	•	A short README.md with:
	•	How to run (node server.js).
	•	Route list.
	•	Example requests/responses.




(.md => Markdown documentation)