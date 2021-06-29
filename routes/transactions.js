'use strict';
const express = require('express');

const {
   getTransactions,
   getTransaction,
   createTransaction,
   updateTransaction,
   deleteTransaction,
   makePayment
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
router
    .route('/success')
    .get(protect, advancedResults(Transaction), getTransactions);

router
    .route('/cancel')
    .post(protect, createTransaction);

router
    .route('/payments')
    .post(protect, makePayment);

module.exports = router;