const express = require('express');
//all three are required to import for morgan
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const configureDB = require('./config/db');
const usersCltr = require('./app/controllers/users-controller');
const notesCltr = require('./app/controllers/notes-controller');
const authenticateUser = require('./app/middlewares/authenticate');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

configureDB();

app.use(express.json());

//application level + 3rd party middleware
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

app.get('/', (req, res) => {
    res.send("Hello Backend");
});

app.post('/api/users', usersCltr.register);

app.post('/api/users/login', usersCltr.login);

// to access account info, first check if the user is logged in 
//verify the token
//account details of users
app.get('/api/users/account', authenticateUser, usersCltr.account);


 
// Notes routes

// Retrieve all notes (requires authentication)
app.get('/api/notes', authenticateUser, notesCltr.list);

// Retrieve a single note (requires authentication)
app.get('/api/notes/:noteId', authenticateUser, notesCltr.show);

// Create a new note (requires authentication)
app.post('/api/notes', authenticateUser, notesCltr.create);

// Update an existing note (requires authentication)
app.put('/api/notes/:noteId', authenticateUser, notesCltr.update);

// Delete a note (requires authentication)
app.delete('/api/notes/:noteId', authenticateUser, notesCltr.remove);



//start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})

