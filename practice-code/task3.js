//Ques) Set up an Express  server using Express JS


//to run this code we have to install express first 
const express = require('express');
const app = express();
const port = 3060;

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Hindu Rastra");
});

app.get("/contact", (req, res) => {
    res.status(200).send("email - hindu@rastra.com");
});

const users = [
    {id: 1, name: 'Veer Savarkar'},
    {id: 2, name: 'NathuRam Godse'},
];

app.get("/users", (req, res) => {
    res.json(users);
});

//used to run the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})