const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Category = require('../../models/Category')

// @route GET api/categories
// @desc Get all categories
// @acces Public
router.get('/', (req, res, next) => {
    Category.find()
        .then((categories) => {
            res.status(200).json({
              count: categories.length,
              categories,
            });
        })
        .catch((err) => {
            res.status(500).json({
              message: "Could not get categories!",
              error: err,
            });
        })
})

// @route GET api/categories/:id
// @desc Get one categories
// @acces Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Category.findById(id)
      .then((category) => {
        res.status(200).json({
          category,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: `Could not get category with id: ${id}!`,
          error: err,
        });
      });
})

// @route POST api/category
// @desc Create one category
// @acces Public
router.post('/', (req, res, next) => {
    const newCategory = new Category({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    newCategory
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Category created!",
          category: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Could not create category!",
          error: err,
        });
      });
})
/*
// @route DELETE api/providers/:id
// @desc Delete one provider
// @acces Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Provider.findById(id)
    .then((provider) => {
        provider.remove()
        .then(()=>{
            res.status(200).json({
                succes: true
            })
        })  
        .catch((err)=>{
            res.status(500).json({
                succes: false,
                error: err
            })
        })  
    })
    .catch((err) => {
        res.status(500).json({
            message: `Could not get provider with id: ${id}!`,
            error: err
        })
    })
})
*/
module.exports = router;