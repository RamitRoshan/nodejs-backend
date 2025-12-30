## Question 1: Frontend Access to JWT

Ques 1). How can we prevent frontend JavaScript from reading the JWT token? so token cannot read it from local-storage ? <br>
ans: We should not store JWT in localStorage. Instead, we store it in HTTP-only cookies, which cannot be accessed by JavaScript but are automatically sent with every request. <br>

or <br>
By storing the JWT in HTTP-only cookies instead of localStorage. HTTP-only cookies cannot be accessed by JavaScript, which protects the token from XSS attacks.

Ques 2). Does the frontend need the JWT secret key to access protected APIs? <br>
ans: No. The JWT secret key is only used by the backend to sign and verify tokens. The frontend only sends the JWT with requests and never needs the secret key. <br>

Ques 3). What happens if the JWT secret key is missing or incorrect on the backend ?
ans: The backend will not be able to verify the JWT, so all protected routes will return 401 Unauthorized, even if the frontend sends a token.


Ques 4). JWT secures APIs, but what additional security layer should we add so that even if someone tampers with the frontend or tries to access protected resources directly, they still cannot access data ? <br>


Ques 5). If JWT secret is not exposed to frontend, what other layer is required to securely manage authentication and authorization in a MERN app ? <br>

ans: We add cookies (HTTP-only, Secure), middleware authorization, and role-based access control as additional layers on top of JWT. <br>


6. How can we connect to a MongoDB database without using Mongoose in a Node.js application?

7. What are the benefits of using Mongoose ODM when working with MongoDB in a Node.js / MERN application?

8. How do you handle errors globally in a backend application (Node.js / Express)?


