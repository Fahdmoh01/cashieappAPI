'use strict';
const express = require('express');

const {
    getProducts,
    getProduct,
    createProduct, 
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const advancedResults = require('../middleware/advancedResults');
const Product = require('../models/Product');
const {protect,authorize} = require('../middleware/auth');

const router = express.Router();

router
    .route('/')
    .get(protect, advancedResults(Product),getProducts)
    .post(protect, authorize('admin'),createProduct);

router
     .route('/:productid')
     .get(protect, getProduct)
     .put(protect, authorize('admin'), updateProduct)
     .delete(protect,authorize('admin'),deleteProduct);

module.exports = router;