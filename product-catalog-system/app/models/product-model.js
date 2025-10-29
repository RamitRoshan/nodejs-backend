// const mongoose = require('mongoose');
// const {Schema, model} = mongoose;

// const userSchema = new Schema({
//     username: String,
//     email: String,
//     password: String,

//     role: {
//         type: String,

//     }
// }, {timestamps: true});


// const User = model('User', userSchema);

// module.exports = User;


 

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: 200
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be positive']
  },
  description: {
    type: String,
    trim: true,
    maxlength: 2000
  },
  image: {
    type: String, // store filename or URL from multer upload
    default: ''
  },
  isApproved: {
    type: Boolean,
    default: false // moderators' products default to false
  },
  isDeleted: {
    type: Boolean,
    default: false // for soft deletion
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

// optional: add text index to support search by name and description
productSchema.index({ name: 'text', description: 'text' });

const Product = model('Product', productSchema);
module.exports = Product;


 
