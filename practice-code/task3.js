// //Ques) Set up an Express  server using Express JS

// //to run this code we have to install express first 
// const express = require('express');
// const app = express();
// const port = 3060;

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to Hindu Rastra");
// });

// app.get("/contact", (req, res) => {
//     res.status(200).send("email - hindu@rastra.com");
// });

// const users = [
//     {id: 1, name: 'Veer Savarkar'},
//     {id: 2, name: 'NathuRam Godse'},
// ];

// app.get("/users", (req, res) => {
//     res.json(users);
// });

// //used to run the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })


// const p1 = {id:1, name:'marker', price:20};
// const obj = {price:25};

// Object.assign(p1, obj);

// console.log(p1);

// const obj2 = {name: 'white board marker', price: 30};
// Object.assign(p1, obj2);
// console.log(p1);


const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
console.log(id);

const id1 = crypto.randomUUID();
console.log(id1);