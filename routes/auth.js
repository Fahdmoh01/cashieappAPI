'use strict';
const express = require('express');
const {
    registerUser,
    loginUser,
    getLoggedInUser,
    logoutUser
} = require('../controllers/auth');

const {protect} = require('../middleware/auth');

const router = express.Router();

router
    .route('/register')
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);

router
    .route('/me')
    .get(protect,getLoggedInUser);

    router
    .route('/logout')
    .get(logoutUser);



module.exports = router;