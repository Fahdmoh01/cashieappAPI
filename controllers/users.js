'use strict';
const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');

//@desc Get All Users
//@route GET api/v1/users
//@access Public
exports.getUsers = asyncHandler(async(req,res, next)=>{
    res.status(200).json(res.advancedResults);
})

//@desc Get Single User
//@route GET api/v1/users/:userid
//@access Public
exports.getUser = asyncHandler(async(req,res, next)=>{

    const user = await User.findById(req.params.userid);
    
       res.status(200).json({
           success:true,
           data:user
       });
   })


//@desc Create User
//@route POST api/v1/users
//@access Private
exports.createUser = asyncHandler(async(req,res, next)=>{

const user = await User.create(req.body);
   //console.log(req.body);

    res.status(201).json({
        success:true,
        count:user.length,
        data:user
       
    });
})

//@desc Update User
//@route PUT api/v1/users/:userid
//@access Private
exports.updateUser = asyncHandler(async(req,res, next)=>{

    let user = await User.findById(req.params.userid);
       //console.log(req.body);
    user = await User.findOneAndUpdate(req.params.userid, req.body,{
        new:true,
        runValidators:true
    })
        
    res.status(201).json({
            success:true,
            data:user
           
        });
    })



//@desc Delete User
//@route DELETE api/v1/users/:userid
//@access Private
exports.deleteUser = asyncHandler(async(req,res, next)=>{

     const user = await User.findById(req.params.userid);
        
      user.remove();
        res.status(200).json({
            success:true,
            data:{}
        });
    })