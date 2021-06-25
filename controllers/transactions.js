'use strict';
const Transaction = require('../models/Transaction');
const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');

//@desc Get All Transactions
//@route GET api/v1/transactions
//@access Private
exports.getTransactions = asyncHandler(async(req,res, next)=>{
    res.status(200).json(res.advancedResults);
})

//@desc Get Single Transaction
//@route GET api/v1/transactions/:transactionid
//@access Private
exports.getTransaction = asyncHandler(async(req,res, next)=>{

    const transaction = await Transaction.findById(req.params.transactionid);
    
       res.status(200).json({
           success:true,
           data:transaction
       });
   })


//@desc Create Transaction
//@route POST api/v1/transactions
//@access Private
exports.createTransaction = asyncHandler(async(req,res, next)=>{

const transaction = await Transaction.create(req.body);
   //console.log(req.body);

    res.status(201).json({
        success:true,
        count:transaction.length,
        data:transaction
       
    });
})

//@desc Update Transaction
//@route PUT api/v1/transactions/:tranactionid
//@access Private
exports.updateTransaction = asyncHandler(async(req,res, next)=>{

    let transaction = await Transaction.findById(req.params.id);
       //console.log(req.body);
    transaction = await Transaction.findOneAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })
        
    res.status(201).json({
            success:true,
            data:transaction
           
        });
    })



//@desc Delete Transaction
//@route DELETE api/v1/transactions/:transactionid
//@access Private
exports.deleteTransaction = asyncHandler(async(req,res, next)=>{

     const transaction = await Transaction.findById(req.params.transactionid);
        
      transaction.remove();
        res.status(200).json({
            success:true,
            data:{}
        });
    })