const mongoose = require('mongoose');

//connecting mongoose(database), to the server.
const configureDB = async function() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('connected to database')
    }catch(err){
        console.log('error connection to database', err);
    }
} 

module.exports = configureDB;