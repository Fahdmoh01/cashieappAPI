'use strict';
const Setting = require('../models/Setting');
const asyncHandler = require('../middleware/async');
const advancedResults= require('../middleware/advancedResults')

//@desc Add Settings
//@route POST api/v1/settings
//@access private
exports.addSetting = asyncHandler(async(req,res, next)=>{

    const setting = await Setting.create(req.body);

       res.status(201).json({
           success:true,
           data:setting
       });
   });


//@desc Get All Settings
//@route GET api/v1/settings
//@access private
exports.getSettings = asyncHandler(async(req,res, next)=>{

    const setting = await Setting.find({});
    
       res.status(200).json(res.advancedResults);
   })

//@desc Update Settings
//@route PUT api/v1/settings/:id
//@access private
exports.updateSetting = asyncHandler(async(req,res, next)=>{

    let setting = await Setting.findById(req.params.id);
    setting = await Setting.findOneAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })

    res.status(201).json({
        success:true,
        data:setting
    });

   })



