//loads environment variables from a .env file into process.env
require('dotenv').config();
const configureDB = require('./config/db'); // import it from config/db
const express = require('express');
const app = express();
//if this port present then use it otherwise use default port 5000
const port = process.env.PORT || 5000;
// const port = 5050;

//middleware
app.use(express.json());

configureDB();


// starting the server
app.listen(() => {
    console.log(`Server is running on port number ${port}`)
})