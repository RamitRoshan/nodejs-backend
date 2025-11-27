# Description :
Build a MERN (MongoDB, Express.js, React, Nodejs) application that allows users to search for a record by its ID. The application will perform the following actions:

1. Search in Database:
        
     - When the user enters an ID and submits the search, the backend will query the MongoDB database to check if the record exists.
     - If the record exists, the application will return the record to the user.
  
2. Fetch from JSONPlaceholder:
     
     - If the record does not exist in the database, the backend will fetch the record from the JSONPlaceholder API.
     - Once retrieved, the record will be inserted into the MongoDB database.
  
3. Response to User:
   
     - After fetching and inserting the record into the database, the application will return the record as a response to the user.

4. Front-End:
     - A simple interface where users can input the record ID and view the results in a user-friendly format.

5. Error Handling:
     - If the record is not available in JSONPlaceholder (e.g., invalid ID), the application will return an appropriate error message.