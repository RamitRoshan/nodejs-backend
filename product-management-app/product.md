# Problem Statement: Build a Simple Product Management Backend API

## Objective:
Create a basic backend API using Node.js and Express that allows users to manage a list of products. <br> 
The products should be stored in an in-memory array (no database required), and the API should support basic CRUD operations.

## Requirements:
You need to implement the following endpoints:

1. GET /products
  - Returns a list of all products.


2. POST /products
  - Adds a new product to the array.
  - Expects a JSON body with the product details (e.g., name, price, description).
  - Assign a unique ID to each product (e.g., using Date.now()).
  
3. GET /products/:id
  - Returns a single product by its ID.
  - If the product does not exist, **return a 404 error.**
  
4. PUT /products/:id
  - Updates a product’s details based on its ID.
  - If the product does not exist, return a 404 error.
  
5. DELETE /products/:id
  - Deletes a product by its ID.
  - If the product does not exist, return a 404 error.

## Constraints:
- Use Node.js and Express.
- Store product data in an array in memory.
- Do not use any external database or file-based storage.
- Properly handle error cases (e.g., product not found, invalid input).

## Bonus (Optional):
- Add input validation to ensure required fields such as name and price are present.
- Add query parameters to filter products in the GET /products endpoint (e.g., by name or price range).

### Example Product Object:
```
{
  "id": 1718032492356,
  "name": "Wireless Mouse",
  "price": 25.99,
  "description": "Ergonomic wireless mouse with USB receiver"
}
```