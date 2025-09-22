const express = require('express');
// Import MongoClient class from mongodb package (use to connect mongodb)
const {MongoClient, ObjectId} = require('mongodb');

/*
es6 object destructuring - helps you to extract properties from an object and makes it
available as independent variables

const obj = {a:1, b:2, c:3}
const {c}  = obj; //here we are extracting property c from the obj
console.log(c); //o/p: 3 , here is avaialable as an inddependent variable
*/
const app = express();
const port = 3075;

// enable configuration to parse incoming json
// application level middleware + in built middleware
// Middleware
app.use(express.json());

//# establishing connection to database(mongodb)

// Step 1: Define connection URL → here MongoDB is running locally on default port 27017
const client = new MongoClient('mongodb://127.0.0.1:27017');

// Step 2: Declare a global variable `db` to store database reference
// (We use let so that we can assign it later after connection)
//declare let db outside, so that we can access it from anywhere
let db;

// Step 3: Create async function to configure and connect database
async function configureDB() {
    try{
        // Try connecting to MongoDB software (Mongo Daemon must be running)
        await client.connect(); //connect to mongodb software
        // Step 4: Choose (or create if not exist) a database named "task-app-july25"
        db = client.db('task-app-july25');  //create a project database
        console.log('connected to db');
    } catch(err){
        // If something goes wrong (wrong URL, MongoDB not running, etc.)
        console.log('error connecting to db', err.message);
    }
}
// Step 5: Call the function to start connection
configureDB(); 


//# how to create a record in DB
app.post('/tasks', async(req,res) => {
    // req.body → contains data sent from frontend (must use express.json() middleware)
    const body = req.body;   //const {body} = req;
    try{
        // insertOne → adds a single document into "tasks" collection
        const task = await db.collection('tasks').insertOne(body);
        console.log(task); //{acknowledged: true, insertedId: new ObjectId('68cd04cf511078425958bc6c')}
         
        // Respond with newly created task
        res.status(201).json({
            _id: task.insertedId,  // MongoDB auto-generated ID
            ...body  // spread operator → rest of the data
        });
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!'});
    }
});

 
// // # list all tasks/READ all tasks (Fetch from DB)
// app.get('/tasks', async(req, res) => {
//     try{
//         // find() → fetch all documents
//         // toArray() → converts cursor into actual JS array
//         const tasks = await db.collection('tasks').find().toArray();

//         // Send tasks back to client
//         res.json(tasks);
//     } catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Something went wrong!!!'})
//     }
// });

// # list all tasks/READ all tasks (Fetch from DB)
app.get('/tasks', async(req, res) => {

    try {
        const { status } = req.query; // ✅ get status from query (eg: /tasks?status=pending)
        let tasks;

        if (status === "pending") {
            tasks = await db.collection('tasks').find({ status: "pending" }).toArray();
        } else if (status === "success") {
            tasks = await db.collection('tasks').find({ status: "success" }).toArray();
        } else {
            // if no status passed → fetch all
            tasks = await db.collection('tasks').find().toArray();
        }

        res.json(tasks);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'})
    }
});


// Find one task by ID
app.get('/tasks/:id', async (req, res) => {
    // Extract id from request params using destructuring
    //const id = req.params.id;
    //With destructuring (ES6)
    const { id } = req.params;  
    
    try {
        // Find document in MongoDB by converting string id → ObjectId
        const task = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
        
        // If no task found, return 404 with empty object
        if (!task) {
            return res.status(404).json({});
        }

        // If task found, send it back
        res.json(task);

    } catch (err) {
        console.log(err);
        // Handle any errors
        res.status(500).json({ error: 'Something went wrong!!!' });
    }
});



//update the task
app.put('/tasks/:id', async(req, res) => {
    const {id} = req.params;  // <= is destructuring of, const id = req.params.id
    const {body} = req; //const body = req.body
    try{
        // Update a task where _id = id
        const task = await db.collection('tasks').updateOne({_id: new ObjectId(id)}, { $set: body });  //filter by id, set the new value

        // return result object (acknowledged, matchedCount, modifiedCount)
        res.json(task);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'});
    }
});


//deleting a task by ID
app.delete('/tasks/:id', async(req, res) => {
    //With destructuring (ES6)
    const {id} = req.params; // extract id from URL
    
    try{
        // Delete one task where _id = id
        const task = await db.collection('tasks').deleteOne({_id: new ObjectId(id) });
        // Send deletion result
        res.json(task);
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'});
    }
});


//API

//GET /tasks
   // return 'list tasks api'

// app.get('/tasks', (req, res) => {
//   res.send('list tasks api');
// });

// // POST /tasks
//    // return 'create task api'
// app.post('/tasks', (req, res) => {
//     const body = req.body;
//     res.send('create task api');
// });

// // GET /tasks/:id
//    // return 'single task api'

// app.get('/tasks/:id', (req,res) => {
//     res.send(`single task api with id: ${req.params.id}`);
// });

// //PUT /tasks/:id
//    // return 'update task api'

// app.put('/tasks/:id', (req, res) => {
//     res.send(`update task api with id: ${req.params.id}`);
// });

// // Delete tasks/:id
//    // return 'remove task api'

// app.delete('/tasks/:id', (req, res) => {
//     res.send(`remove task api with id: ${req.params.id} `);
// });


//use to start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
