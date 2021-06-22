'use strict';
const express = require('express');

const {
    getCategories,
    getCategory,
    createCategory, 
    updateCategory,
    deleteCategory
} = require('../controllers/categories');

const router = express.Router();


router
    .route('/')
    .get(getCategories)
    .post(createCategory);

router
    .route('/:categoryid')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports =router;