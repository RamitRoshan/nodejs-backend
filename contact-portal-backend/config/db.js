const mongoose = require('mongoose');

//connecting database to the server
const configureDB = async function(){
    try{
        await mongoose.connect(process.env.DB_URL); //database name : contact-portal25
        console.log("connected to db");
    }catch(err){
        console.log("error connection to db", err);
    }
}
module.exports = configureDB;
 



 