const Joi = require('joi');


const userRegisterValidationSchema = Joi.object({
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()
});

//used when we start login after register
const userLoginValidationSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()

    //used specially to make password more strong
    
    // password: Joi.string().trim().min(8).max(128)
    // .pattern(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$'))
    // .required()
    // .messages({
    //   'string.pattern.base':
    //     'Password must contain at least one uppercase letter, one number, and one special character (!@#$%^&*).',
    // }),
});


module.exports = {
    userRegisterValidationSchema,
    userLoginValidationSchema
}