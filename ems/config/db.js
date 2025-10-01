const mongoose = require('mongoose');

//connect Mongoose (database) to server
const configureDB = async function() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ems-july25'); //database name:ems-july25
        console.log('connected to db');
    } catch(err){
        console.log('error connection to db', err);
    }
}
module.exports = configureDB;



 