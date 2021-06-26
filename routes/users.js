'user strict';
const express = require('express');
const{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}= require('../controllers/users');

const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();

router
    .route('/')
    .get(advancedResults(User),getUsers)
    .post(createUser);

router
    .route('/:userid')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);




module.exports = router;