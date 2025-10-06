const Task = require('../models/task-model');
const {taskValidationSchema} = require('../validators/task-validator');
const taskscntrl = {};


//Retrieving a list of all tasks.
taskscntrl.list = async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!!'});
    }
};

//retrieving a single tasks based on its unique ID
taskscntrl.show = async(req, res) => {
    const taskId = req.params.taskId;
    try{
        const task = await Task.findById(taskId);

        //error handling(if taskID is not present)
        if(!task){
            return res.status(404).json({});
        }
        //if taskID present
        res.json(task);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'});
    }
};

//Creating a new task
taskscntrl.create = async(req, res) => {
    const body = req.body;  //read the body (and datatype of body is object)

    const{error, value} = taskValidationSchema.validate(body, {abortEarly: false});
    if(error){
        return res.status(400).json(error);
    }
    try{
        //then, create a object
        const task = new Task(value);
        //save the object
        await task.save();
        res.status(201).json(task);

    }catch(err){
        console.log(err);
        res.status(400).json({error: 'something went wrong!!!'});
    }
};
        

//Updating an existing task
taskscntrl.update = async(req, res) => {
    const taskId = req.params.taskId;
    const body = req.body;
    const{error, value} = taskValidationSchema.validate(body, {abortEarly: false});
    if(error){
        return res.status(400).json(error);
    }
    try{
        const task = await Task.findByIdAndUpdate(taskId, value, {new:true});

        //error handling 1st
        if(!task){
            return res.status(404).json({message: 'Task not found'});
        }
        res.json({ message: 'Task updated successfully', task });

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!'});
    }
};


//Delete a task
taskscntrl.remove = async(req, res) => {
    const taskId = req.params.taskId;
    try{
        const task = await Task.findByIdAndDelete(taskId);

        //error handling
        if(!task){
            return res.status(404).json({});
        }
        res.json(task);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!'});
    }
};



module.exports = taskscntrl;