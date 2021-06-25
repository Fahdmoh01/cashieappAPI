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
const Transaction = require('../models/Transaction');

const router = express.Router();

router
    .route('/')
    .get(advancedResults(Transaction), getTransactions)
    .post(createTransaction);

router
     .route('/:transactionid')
     .get(getTransaction)
     .put(updateTransaction)
     .delete(deleteTransaction);

module.exports = router;