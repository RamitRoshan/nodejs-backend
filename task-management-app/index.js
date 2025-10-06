const express = require('express');
const configureDB = require('./config/db');
const taskscntrl = require('./app/controllers/tasks-cntrl');
const app = express();
const port = 7070;


//middle-ware
app.use(express.json());

configureDB();


//Retrieve a list of all tasks.
app.get('/api/tasks', taskscntrl.list);

//Retrieve a single tasks based on its unique ID
app.get('/api/tasks/:taskId', taskscntrl.show);

//Creating a new task
app.post('/api/tasks', taskscntrl.create);

//Update an existing task
app.put('/api/tasks/:taskId', taskscntrl.update);


//Delete  a task
app.delete('/api/tasks/:taskId', taskscntrl.remove);



//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})