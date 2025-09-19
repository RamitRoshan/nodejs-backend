const express = require('express');
// Import MongoClient class from mongodb package (use to connect mongodb)
const {MongoClient} = require('mongodb');

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


//how to create a record in DB
app.post('/tasks', async(req,res) => {
    const body = req.body;   //const {body} = req;
    try{
        const task = await db.collection('tasks').insertOne(body);
        console.log(task); //{acknowledged: true, insertedId: new ObjectId('68cd04cf511078425958bc6c')}
        res.status(201).json({
            _id: task.insertedId,
            ...body
        });
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!'});
    }
});

 
// list/READ all tasks (Fetch from DB)
app.get('/tasks', async(req, res) => {
    try{
        // find() → fetch all documents
        // toArray() → converts cursor into actual JS array
        const tasks = await db.collection('tasks').find().toArray();
        
        // Send tasks back to client
        res.json(tasks);
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong!!!'})
    }
});


//API

//GET /tasks
   // return 'list tasks api'

app.get('/tasks', (req, res) => {
  res.send('list tasks api');
});

// POST /tasks
   // return 'create task api'
app.post('/tasks', (req, res) => {
    const body = req.body;
    res.send('create task api');
});

// GET /tasks/:id
   // return 'single task api'

app.get('/tasks/:id', (req,res) => {
    res.send(`single task api with id: ${req.params.id}`);
});

//PUT /tasks/:id
   // return 'update task api'

app.put('/tasks/:id', (req, res) => {
    res.send(`update task api with id: ${req.params.id}`);
});

// Delete tasks/:id
   // return 'remove task api'

app.delete('/tasks/:id', (req, res) => {
    res.send(`remove task api with id: ${req.params.id} `);
});


//use to start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
