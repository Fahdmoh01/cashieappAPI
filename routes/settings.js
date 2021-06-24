'use strict';
const express = require('express');

const router = express.Router();

const{
    getSettings,
    updateSetting,
    addSetting
}=require('../controllers/settings');

const advancedResults= require('../middleware/advancedResults');
const Setting = require('../models/Setting');

router
    .route('/')
    .get(advancedResults(Setting),getSettings)
    .post(addSetting);


router
    .route('/:id')
    .put(updateSetting);


module.exports = router;