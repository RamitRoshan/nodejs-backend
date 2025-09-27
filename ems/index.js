const express = require('express');
const mongoose = require('mongoose');   //npm i mongoose
const app = express();
const port = 4040;


//middle-ware (backend is able to pass the json data then it will run)
app.use(express.json());

//connect Mongoose (database) to server
async function configureDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ems-july25'); //database name:ems-july25
        console.log('connected to db');
    } catch(err){
        console.log('error connection to db', err);
    }
}
configureDB();


//Create a Schema
const employeeSchema = new mongoose.Schema({    //structure of the document
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    userName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    }
});


//Create a Model
//model is nothing but a constructor functions
const Employee = mongoose.model('Employee', employeeSchema);



//CRUD operations

//set-up api's

//Retrieve all employees
app.get('/api/employees', async(req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong'});
    }
});

//Create a new Employee
app.post('/api/employees', async(req, res) => {
    const body = req.body;
    try{
        //creating a object to create a new Employee
        const emp = new Employee(body);
        await emp.save();
        res.status(201).json(emp);  //resource created

    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});


//Retrieve a single employee
app.get('/api/employees/:empId', async(req, res) => {
    const empId = req.params.empId;
    try{
        //usethis in mongoClient = db.collection('employee).findOne({_id: new Object(empId)})
        const employee = await Employee.findById(empId);

        //error handling(if employee is not present)
        if(!employee){
            return res.status(404).json({});
        }
        //if employee present
        res.json(employee);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'});
    }
});

//start the server
app.listen(port, () => {
    console.log(`EMS server is running on port number ${port}`);
});
