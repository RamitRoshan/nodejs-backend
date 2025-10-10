const express = require('express');
const configureDB = require('./config/db');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
configureDB();

//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})