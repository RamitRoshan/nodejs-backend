const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    mobile: String

}, {timestamps: true})   //it works as required:true -> for all, we dont have to write individually

//Create a Model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;