'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email']
    },
    role:{
        type:String,
        enum:['user','cashier'],
        default:'cashier'
    },
    password:{
        type:String,
        required:[true, 'Please add a password'],
        minlength: 6,
        select:false
        //select false ensures we do not select/show the password during API calls
    },
    resetPasswordToken:Date,
    resetPasswordExpire:Date
},
{
    timestamps:true
}
);

module.exports = mongoose.model('User', UserSchema);