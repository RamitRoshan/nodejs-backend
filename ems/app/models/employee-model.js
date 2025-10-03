const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    mobile: String

}, {timestamps: true})   //wheneevr record is created whenever record is created(chck once)
//it works as required:true -> for all, we dont have to write individually(using required: true or false)

//Creating a Model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;