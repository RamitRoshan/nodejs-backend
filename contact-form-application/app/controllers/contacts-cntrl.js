const Contact = require('../models/contact-model');
const {contactValidationSchema} = require('../validators/contact-validator');
const contactsCntrl = {};

//creating list methods inside employees controler
contactsCntrl.list = async(req, res) => {
    try{
        const contacts = await Contact.find();
        res.json(contacts);

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'something went wrong!!!!'});
    }
};



module.exports = contactsCntrl;