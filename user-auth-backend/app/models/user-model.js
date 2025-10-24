const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    //here 1st user will be admin, but after that we use give data through put: all will be user
    role: {
        type: String,
        default: 'user',
        //enumurator(enum) i.e in given list of 3 we have to choose one value and it should be included in the array.
        enum: ['admin', 'moderator', 'user']
    }
}, {timestamps: true});

const User = model('User', userSchema);

module.exports = User;


 
 
