'use strict';
const express = require('express');

const router = express.Router();

const{
    getSettings,
    updateSetting,
    addSetting
}=require('../controllers/settings');

const advancedResults= require('../middleware/advancedResults');
const {protect,authorize} = require('../middleware/auth');

const Setting = require('../models/Setting');

router
    .route('/')
    .get(protect, authorize('admin'), advancedResults(Setting),getSettings)
    .post(protect, authorize('admin'), addSetting);


router
    .route('/:id')
    .put(protect, authorize('admin'), updateSetting);


module.exports = router;