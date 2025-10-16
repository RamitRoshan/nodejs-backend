# Here’s a clear and well-structured problem statement for the task:

⸻

## Problem Statement: Setting Up a Simple Express Server

- Objective

Create a simple Express.js server that exposes a single API endpoint. This endpoint should accept an array of numbers and respond with basic statistical information — specifically, the minimum, maximum, and average values from the array.

⸻

- Requirements
	1.	Server Setup
	•	Use Node.js and the Express framework.
	•	The server should listen on a specific port (e.g., 3000).
	2.	Route Definition
	•	Create a single POST route at /analyze.
	•	The route should accept a JSON request body with the following structure:
        {
           "numbers": [10, 20, 30, 40, 50]
        }


	3.	Input Validation
	•	Ensure that:
	•	The numbers field exists.
	•	It is an array.
	•	Every element in the array is a valid number.
	•	If validation fails, respond with a suitable HTTP 400 Bad Request error and an error message.
	4.	Processing Logic
	•	Calculate:
	•	The minimum number.
	•	The maximum number.
	•	The average (mean) of the numbers.
	5.	Response Format
	•	Respond with a JSON object containing the calculated values:
        {
            "min": 10,
            "max": 50,
            "average": 30
        }


	6.	Error Handling
	•	Include proper error handling for invalid JSON, missing fields, or incorrect data types.

⸻

Example

Request:

POST /analyze
Content-Type: application/json

{
  "numbers": [4, 8, 15, 16, 23, 42]
}

Response:

{
  "min": 4,
  "max": 42,
  "average": 18
}


⸻

Bonus (Optional)
	•	Add logging middleware to print the request method and URL.
	•	Handle empty arrays gracefully (e.g., return a 400 error with a message like "Array cannot be empty").




       // if (!numbers.every(num => typeof num === 'number' && !isNaN(num))) {
    //     return res.status(400).json({ error: "All elements must be valid numbers" });
    // }