const Joi = require('joi');

const userRegisterValidationSchema = Joi.object({
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()
});

const userLoginValidationSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()
});

module.exports = {
    userRegisterValidationSchema,
    userLoginValidationSchema
}