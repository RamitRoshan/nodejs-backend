const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String

}, {timestamps: true}) //whenever record is created(check once)

//creating a model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;