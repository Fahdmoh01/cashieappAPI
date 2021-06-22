'use strict';
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    products:Array,
    subtotal:Number,
    discount:Number,
    tax:Number,
    grandtotal:Number
},
{
    timestamps:true
});

module.exports = mongoose.model('Trasaction',TransacationSchema);
