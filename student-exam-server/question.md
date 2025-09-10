# Problem Statement

We need to develop a simple Express.js application that exposes APIs for retrieving student information and their academic results. The application will use a static in-memory data source (JavaScript arrays) to simulate database storage — no external database connection is required.

Requirements
	1.	Internal Data Source
	•	Maintain an internal array of student records containing fields such as:
	•	id (unique identifier for the student)
	•	name (student’s full name)
	•	rollNumber (unique roll number for each student)
	•	Maintain a separate internal array of student results containing fields such as:
	•	rollNumber (to map result to student)
	•	course
	•	marks

	2.	APIs to Implement
	•	Students API
	•	GET /students → Returns a list of all students.
	•	GET /students/:id → Returns details of a single student based on the provided id.
	
	•	Results API
	•	GET /results?rollNumber={rollNumber} → Returns the result(s) of the student whose roll number is provided as a query parameter.
	
	3.	Constraints
	•	Data will be fetched only from the internal arrays (no external DB).
	•	Proper error handling must be implemented for invalid id or rollNumber.
	•	Response format should be structured in JSON.


# Problem Statement

We need to develop a simple Express.js application that exposes APIs for retrieving student information and their academic results.

## Requirements
1. Internal Data Source
   - Maintain an internal array of student records containing:
     - id
     - name
     - rollNumber
   - Maintain a separate array of student results containing:
     - rollNumber
     - course
     - marks

2. APIs to Implement
   - GET /students → Returns all students
   - GET /students/:id → Returns student by id
   - GET /results?rollNumber={rollNumber} → Returns results of a student

3. Constraints
   - Only internal arrays (no external DB)
   - Proper error handling
   - JSON response format
