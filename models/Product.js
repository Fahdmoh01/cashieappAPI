'use strict';
const mongoose = require ('mongoose');
const slugify = require('slugify');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add product name']
    },
    slug:String,
    description:{
        type:String,
        required:[true,'Please add a description to product'],
        maxlength:[500,'Description cannot be more than 500 characters']
    },
    price:{
        type:Number,
        required:[true, 'Please add product price'],
    },
    photo:{
        type:String,
        required:[true, 'Please add product photo'],
        default:'no-photo.jpg'
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Product',ProductSchema);