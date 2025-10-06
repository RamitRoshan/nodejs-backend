const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"], //enum → limits allowed values to "pending", "in-progress", or "completed".
        default: "pending"  //default: "pending" → sets the initial status automatically.
    }
}, {timestamps: true}); // automatically adds createdAt and updatedAt fields


//Creating a Model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
 
