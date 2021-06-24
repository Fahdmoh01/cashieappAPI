'use strict';
const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema({
    name:String
},
{
    timestamps:true
});

//create Category slug from the name
CategorySchema.pre('save',function(next){
    this.slug = slugify(this.name, {lower:true});
    next();
});

module.exports = mongoose.model('Category',CategorySchema);