'use strict';
const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    name:String,
    discount: String,
    tax:String
},
{
    timestamps:true
});

module.exports = mongoose.model('Setting', SettingSchema);