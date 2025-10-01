const Employee = require('../models/employee-model');
const employeesCntrl = {};

//creating list methods inside employees controler
employeesCntrl.list = async(req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!'});
    }
}


//retrieving a sinle employee
employeesCntrl.show = async(req, res) => {
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
}


module.exports = employeesCntrl;