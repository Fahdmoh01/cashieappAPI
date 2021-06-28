'use strict';
const express = require('express');

const {
   getTransactions,
   getTransaction,
   createTransaction,
   updateTransaction,
   deleteTransaction
} = require('../controllers/transactions');

const advancedResults = require('../middleware/advancedResults');
const {protect,authorize} = require('../middleware/auth');



const Transaction = require('../models/Transaction');

const router = express.Router();

router
    .route('/')
    .get(protect, advancedResults(Transaction), getTransactions)
    .post(protect, createTransaction);

router
     .route('/:transactionid')
     .get(protect, getTransaction)
     .put(protect, updateTransaction)
     .delete(protect, authorize('admin'), deleteTransaction);

module.exports = router;