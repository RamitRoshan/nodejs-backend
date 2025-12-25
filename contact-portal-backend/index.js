//loads environment variables from a .env file into process.env
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const configureDB = require('./config/db'); // import it from config/db



const contactPortalCltr = require('./app/controllers/contactportal-controller');



const app = express();
//if this port present then use it otherwise use default port 5000
const port = process.env.PORT || 5000;
// const port = 5050;


//middleware
app.use(express.json());
app.use(cors());

//DB connection
configureDB();
 
//public content routes (Retrieving)

app.get('/api/home', contactPortalCltr.home);

app.get('/api/about', contactPortalCltr.about);

app.get('/api/services', contactPortalCltr.services);

app.get('/api/contact', contactPortalCltr.contactPage);


// creating a contact details (contact form routes)
app.post('/api/contact/submit', contactPortalCltr.submitContact);

//admin routes

app.post('/api/admin/login', contactPortalCltr.adminLogin);

app.get('/api/admin/contacts', contactPortalCltr.adminContacts);


// starting the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})
 
