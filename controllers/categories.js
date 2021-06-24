'use strict';
const Category = require('../models/Category');
const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');

//@desc Get All Categories
//@route GET api/v1/categories
//@access Public
exports.getCategories = asyncHandler(async(req,res, next)=>{
    res.status(200).json(res.advancedResults);
})

//@desc Get Single Category
//@route GET api/v1/categories/:categoryid
//@access Public
exports.getCategory = asyncHandler(async(req,res, next)=>{

    const category = await Category.findById(req.params.categoryid);
    
       res.status(200).json({
           success:true,
           data:category
       });
   })


//@desc Create Category
//@route POST api/v1/categories
//@access Private
exports.createCategory = asyncHandler(async(req,res, next)=>{

const categories = await Category.create(req.body);
   //console.log(req.body);

    res.status(201).json({
        success:true,
        count:categories.length,
        data:categories
       
    });
})

//@desc Update Category
//@route PUT api/v1/categories/:categoryid
//@access Private
exports.updateCategory = asyncHandler(async(req,res, next)=>{

    let category = await Category.findById(req.params.id);
       //console.log(req.body);
    category = await Category.findOneAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })
        
    res.status(201).json({
            success:true,
            data:category
           
        });
    })



//@desc Delete Category
//@route DELETE api/v1/categories/:categoryid
//@access Private
exports.deleteCategory = asyncHandler(async(req,res, next)=>{

     const category = await Category.findById(req.params.categoryid);
        
      category.remove();
        res.status(200).json({
            success:true,
            data:{}
        });
    })