'use strict';
const express = require('express');
const {
    registerUser,
    loginUser
} = require('../controllers/auth');

//const {protect} = require('../middleware/auth');

const router = express.Router();

router
    .route('/register')
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);



module.exports = router;