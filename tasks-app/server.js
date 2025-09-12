const express = require('express');
const app = express();
const port = 3075;

//3333

//To start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})