const express = require('express');
const app = express();
const port = 4040;


//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})
