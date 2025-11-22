# Product Catalog System :

## Overview
In this take-home assignment, you are tasked with developing an advanced product catalog system using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This system will feature differentiated access and functionalities for three types of users: admin, moderator, and customer. Key features include user authentication, role-based authorization, product management with soft deletion and restoration, and a dynamic product listing with search, sort, and pagination capabilities.

## Objective
Your goal is to build a secure, efficient, and user-friendly web application that demonstrates your capabilities in full-stack development, focusing on CRUD operations, authentication and authorization, and advanced database handling with soft deletion.

## Functional Requirements

1. User Authentication and Authorization <br>
```
Implement JWT (JSON Web Tokens) for secure authentication.
Automatically assign the "admin" role to the first registered user. Subsequent registrations default to the "customer" role.
Provide functionality for the admin to create "moderator" users.
```

2. User Roles and Permissions  <br>

```
Admin: Can create, read, update, delete (soft delete), and restore products. Has the authority to manage user roles.
Moderator: Can create, update, and read products. Products added by a moderator require admin approval before they become visible to customers.
Customer: Can only view products.
```

3. Product Management

```
Each product will have the following attributes: name, price, description, approval status, and an image.(use multer package for image)
Implement soft deletion for products, where "deleted" products are marked as inactive rather than being permanently removed.
Admins have the exclusive ability to restore products marked as inactive.
Include features for product search, sorting (e.g., by name, price), and pagination.
```

## Technical Specifications :
Backend (Node.js & Express.js):

Design RESTful APIs to handle all server-side logic.
Use MongoDB with Mongoose for the database. Include a deleted flag or similar in your product schema for soft deletion.
Implement middleware for authentication and role-based authorization checks.
For image uploads, consider using Multer.






## Initial project setup

```
   set MVC architecture 
   setup server
   connect to db

model - 
   user
      username
      email
      password
      role
      timestamps

controller 
   1. POST /api/users/register
         perform form validations 
            - role should not admin or moderator 
         first user is admin
         encrypt password and store to db

      test api 
   
   2. POST /api/users/login
      verify user account details
      generate token and send to fe

      test api 
   
   3. GET /api/users/account 
         setup protected route
         middleware - authenticateUser 

   4. POST /api/users/create-moderator auth, authorize(['admin'])
         allow an admin to create a user 


   model 
      - Product
         name
         price
         description
         isApproved
         image
      
   CRUD 

      1. POST api/products - auth, authorize(['admin', 'moderator'])
            allow product to be created

            if the user is moderator 
               product.isApproved = false 





               const product = new Product(values); 
            
               if(req.role == "moderator") {
                  product.isApproved = false
               } else {
                  product.isApproved = true 
               }
               
```

// Read Products:

         Product.find({ isApproved: true })
