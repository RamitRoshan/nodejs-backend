const Joi = require('joi');

const contactValidationSchema = Joi.object({
    name: Joi.string().trim().pattern(/^[a-zA-Z]+$/).message('name should consist of only alphabets').min(3).required(),
    email: Joi.string().trim().email().required(),
    message: Joi.string().trim().min(3).required()
});

contactIdValidationSchema = {}


module.exports = {
    contactValidationSchema: contactValidationSchema,
    contactIdValidationSchema: this.contactIdValidationSchema
};