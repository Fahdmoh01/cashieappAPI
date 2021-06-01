const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add product name']
    },
    description:{
        type:String,
        required:[true,'Please add a description to product']
    },
    price:{
        type:Number,
        required:[true, 'Please add product price'],
    },
    photo:{
        type:String,
        required:[true, 'Please add product photo'],
        default:'no-photo.jpg'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product',ProductSchema);