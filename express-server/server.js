const express = require('express');
const app = express();
const port = 3030;

// setup an express server, define a route "/" returns a welcome message
// requestListener syntax
// app.httpMethod(url, callback)

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the website");
});

app.get("/contact", (req, res) => {
    res.status(200).send("email - admin@techwave.com");
})


const users = [
    { id: 1, name: 'NathuRam'},
    { id: 2, name: 'Savarkar'},
];

app.get("/users", (req, res) => {
    // res.json() automatically converts JavaScript objects/arrays into JSON format 
    // and sets the "Content-Type: application/json" header.
    res.json(users);
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})