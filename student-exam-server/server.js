/*

1. create package.json
2. install express
3. create a server.js file
4. require('express') into the file
5. setup an express app
6. define port 3050
7. run express app on port 3050 using listen method
 */

const express = require('express');
const app = express();
const port =3050;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})