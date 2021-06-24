'use strict';
const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    name:String,
    discount: Number,
    tax:Number
},
{
    timestamps:true
});

module.exports = mongoose.model('Setting', SettingSchema);