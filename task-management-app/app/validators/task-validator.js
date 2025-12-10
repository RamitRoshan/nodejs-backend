const Joi = require('joi');

const taskValidationSchema = Joi.object({
    title: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z\s]+$/)
        .message('Title should consist of only alphabets')
        .required(),

    description: Joi.string()
        .trim()
        .min(3)
        .message('Description should be at least 3 characters long')
        .required(),

    status: Joi.string()
        .valid('pending', 'in-progress', 'completed')
        .default('pending')
        .messages({
            'any.only': 'Status must be one of pending, in-progress, or completed'
        })
});

taskIdValidationSchema = {}

module.exports = {
    taskValidationSchema: taskValidationSchema,
    taskIdValidationSchema: taskIdValidationSchema
};
 

