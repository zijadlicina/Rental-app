const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Bike = require('../../models/Bike')
const Provider = require('../../models/Provider')

// @route GET api/providers
// @desc Get all providers
// @acces Public
router.get('/', (req, res, next) => {
    Provider.find()
        .then((providers) => {
            res.status(200).json({
                count: providers.length,
                users: providers
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not get providers!",
                error: err
            })
        })
})

// @route GET api/providers/:id
// @desc Get one providers
// @acces Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Provider.findById(id)
        .then((provider) => {
            res.status(200).json({
                provider: provider
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Could not get provider with id: ${id}!`,
                error: err
            })
        })
})

// @route POST api/providers
// @desc Create one provider
// @acces Public
router.post('/', (req, res, next) => {
    const newProvider = new Provider({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        location: req.body.location
    })
    newProvider.save()
        .then((result) => {
            res.status(201).json({
                message: "Provider created!",
                provider: result
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not create provider!",
                error: err
            })
        })
})

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

module.exports = router;