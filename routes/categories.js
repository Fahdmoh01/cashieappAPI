'use strict';
const express = require('express');

const {
    getCategories,
    getCategory,
    createCategory, 
    updateCategory,
    deleteCategory
} = require('../controllers/categories');

const advancedResults = require('../middleware/advancedResults');
const Category = require('../models/Category');

const router = express.Router();


router
    .route('/')
    .get(advancedResults(Category),getCategories)
    .post(createCategory);

router
    .route('/:categoryid')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports =router;