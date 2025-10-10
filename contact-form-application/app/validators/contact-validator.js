const Joi = require('joi');

const contactValidationSchema = Joi.object({
    yourname: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    mobile: Joi.string().trim().pattern(/^[0-9]*$/).min(10).max(10).required(),
    message: Joi.string().trim().min(5).required()
});

contactIdValidationSchema = {}

module.exports = {
    contactValidationSchema: contactValidationSchema,
    contactIdValidationSchema: this.contactIdValidationSchema
};