const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    yourname: String,
    email: String,
    mobile: String,
    message: String

}, {timestamps: true})   //wheneevr record is created whenever record is created(chck once)
//it works as required:true -> for all, we dont have to write individually(using required: true or false)

//Creating a Model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;