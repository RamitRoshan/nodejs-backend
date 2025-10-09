const express = require('express');
//all three are required to import for morgan
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const configureDB = require('./config/db');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

configureDB();

app.use(express.json());

//application level + 3rd party middleware
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

app.get('/', (req, res) => {
    res.send("Hello Backend");
})

//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})

