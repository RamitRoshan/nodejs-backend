# Express.js Notes

## What is Express ?
- **Express.js** is a web framework built on top of **Node.js**.
- It helps to keep backend code **modular (for every url , it will get different callback fn), structured, and easy to maintain**.
- **NestJS** (another backend framework) is also built on top of Express.

> **Note:** Node.js allows us to run JavaScript code **outside the browser**.

---

## Installation

```
npm init -y      # create package.json (project setup)
npm i express    # install express
```

### Where are packages installed ?
- Installed inside the node_modules folder.


### What is Modular ?
- Modular code means breaking your program into small, independent parts (modules) instead of writing everything in one big file.

- Each module (or function) handles only one job, making the code:

   - Easier to read
   - Easier to maintain
   - Easier to debug

### 🔹 In Express.js

In Express, each URL (route) can have its own callback function (or controller).
That’s why **Express is called modular**.


### Example:
```
const express = require('express');
const app = express();
const port = 3000;

// Different routes (URLs) handled by different callback functions
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at support@example.com');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

```

### Why modular is good ?
- Instead of one huge function that decides what to do for every request,
Express lets you separate logic per route(urL).


- URL - Uniform Resource Locator


 
