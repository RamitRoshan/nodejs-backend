const Joi = require('joi');

const employeeValidationSchema = Joi.object({
    firstName: Joi.string().trim().pattern(/^[a-zA-Z]+$/).message('first name should consist of only alphabets').required(),
    lastName: Joi.string().trim().pattern(/^[a-zA-Z]+$/).message('last name should consist of only alphabets').required(),
    username: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    mobile: Joi.string().trim().pattern(/^[0-9]*$/).message('mobile should be only numbers').min(10).max(10).required()
});

employeeIdValidationSchema = {}

module.exports = {
    employeeValidationSchema: employeeValidationSchema,
    employeeIdValidationSchema: employeeIdValidationSchema
};

// module.exports = employeeValidationSchema;

