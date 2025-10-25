const Joi  = require('joi');


const productRegisterValidationSchema = Joi.object({
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()
});



//used when we start login after register
const productLoginValidationSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(128).required()

});    


module.exports = {
    productRegisterValidationSchema,
    productLoginValidationSchema
}


/*
We use Joi validators in backend projects to validate incoming data (like from API requests) before saving it to the database.

🔹 In short:
Ensures data is correct and safe (e.g., email is valid, password has min length).

Prevents invalid or malicious input from breaking the app.

Reduces bugs and improves data consistency.
*/