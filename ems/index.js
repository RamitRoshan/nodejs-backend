const express = require('express');
const configureDB = require('./config/db');  // import it from config/db
const employeesCntrl = require('./app/controllers/employees-cntrl');
const app = express();
const port = 4040;

//middle-ware
app.use(express.json());

configureDB();


//Retrieve all employees
app.get('/api/employees', employeesCntrl.list);

//Retrieve a single employee
app.get('/api/employees/:empId', employeesCntrl.show);

//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
});