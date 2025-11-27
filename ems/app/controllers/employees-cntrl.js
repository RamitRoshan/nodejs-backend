const axios = require('axios');
const Employee = require('../models/employee-model');
const {employeeValidationSchema} = require('../validators/employee-validator');
const employeesCntrl = {};

//creating list methods inside employees controler
employeesCntrl.list = async(req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!!'});
    }
};


//retrieving a single employee
employeesCntrl.show = async(req, res) => {
    const empId = req.params.empId;
    try{
        //usethis in mongoClient = db.collection('employee).findOne({_id: new Object(empId)})
        const employee = await Employee.findById(empId);

        //error handling(if employeeID is not present)
        if(!employee){
            return res.status(404).json({});
        }
        //if employeeID present
        res.json(employee);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'});
    }
};

//Creating a new employee
employeesCntrl.create = async(req, res) => {
    const body = req.body;  //read the body (and datatype of body is object)

    const{error, value} = employeeValidationSchema.validate(body, {abortEarly: false});
    if(error){
        return res.status(400).json(error);
    }
    try{
        //then, create a object
        const emp = new Employee(value);
        //save the object
        await emp.save();
        res.status(201).json(emp);

    }catch(err){
        console.log(err);
        res.status(400).json({error: 'something went wrong!!!'});
    }
};


//Updating an existing employee
employeesCntrl.update = async(req, res) => {
    const empId = req.params.empId;
    const body = req.body;
    const{error, value} = employeeValidationSchema.validate(body, {abortEarly: false});
    if(error){
        return res.status(400).json(error);
    }
    try{
        const emp = await Employee.findByIdAndUpdate(empId, body, {new:true});

        //error handling 1st
        if(!emp){
            return res.status(404).json({});
        }
        res.json(emp);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!'});
    }
};


//Delete an employee
employeesCntrl.remove = async(req, res) => {
    const empId = req.params.empId;
    try{
        const emp = await Employee.findByIdAndDelete(empId);

        //error handling
        if(!emp){
            return res.status(404).json({});
        }
        res.json(emp);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!'});
    }
};


module.exports = employeesCntrl;