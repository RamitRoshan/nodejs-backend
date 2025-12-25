require('dotenv').config(); 
//loads environment variables from a .env file into process.env
const express = require('express');
const configureDB = require('./config/db');  // import it from config/db
const employeesCntrl = require('./app/controllers/employees-cntrl');
const authenticateUser = require('./app/middlewares/authenticate')
const cors = require('cors');

//all three are required to import for morgan
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();
//if this port present then use it otherwise use default port 5000
const port = process.env.PORT || 4000;
// const port = 4040;

//middle-ware
app.use(express.json());
app.use(cors());

configureDB();

 
//application level + 3rd party middleware
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));



//this middleware fn(app.use()) will use/call first then any of the req handlers call
// app.use((req, res, next) => {
//     console.log(`${req.method} -${req.url} - ${req.ip} - ${new Date()}`);
//     next();
// });

//Retrieve all employees
app.get('/api/employees', employeesCntrl.list);

//Retrieve a single employee
app.get('/api/employees/:empId', employeesCntrl.show);


//Create a new employee
// app.post('/api/employees', employeesCntrl.create);
app.post('/api/employees',authenticateUser, employeesCntrl.create);

//Update an existing employee
app.put('/api/employees/:empId', employeesCntrl.update);

//Delete an employee
app.delete('/api/employees/:empId', employeesCntrl.remove);


//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
});

