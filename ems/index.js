const express = require('express');
const configureDB = require('./config/db');  // import it from config/db
const app = express();
const port = 4040;

//middle-ware
app.use(express.json());

configureDB();

//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
});