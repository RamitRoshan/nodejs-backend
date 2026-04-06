# USER AUTHENTICATION SYSTEM

User
----
```
user_id (PK)
name
email (unique)
password_hash
role
created_at
```

## How to explain: 

“I’ll start with a basic authentication system. <br>
User is the main entity. <br>
Each user has a unique email and a hashed password. <br>
Roles can be used for authorization like admin or normal user.” <br>


## Q1. Why store password_hash instead of password? <br>
ans: Security. We never store plain text passwords.

## Q2. How login works? <br>
ans: User enters email + password → compare hashed password → generate JWT.

## Q3. Why email unique? <br>
ans: To uniquely identify a user.