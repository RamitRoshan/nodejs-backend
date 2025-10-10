const express = require('express');
const port = 7070;
const app = express();

app.use(express.json());



//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})