const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Bike = require('../../models/Bike')
const Provider = require('../../models/Provider')
const providerUrl = "http://localhost:5000/api/providers"

// @route GET api/bikes
// @desc Get all bikes
// @acces Public
router.get('/', (req, res, next) => {
    Bike.find()
        .then((bikes) => {
            res.status(200).json({
                count: bikes.length,
                bikes: bikes.map(bike => {
                    return {
                        _id: bike._id,
                        provider: {
                            _id: bike.provider,
                            request: {
                                type: 'GET',
                                url: providerUrl + '/' + bike.provider
                            }
                        },
                        status: bike.status,
                        category: bike.category,
                        type: bike.type,
                        seat: bike.seat,
                        color: bike.color
                    }
                })
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not get bikes!",
                error: err
            })
        })
})

// @route GET api/bikes/:id
// @desc Get one bike
// @acces Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Bike.findById(id)
        .then((result) => {
            res.status(200).json({
                bike: { 
                        _id: result._id,
                        provider: {
                            _id: result.provider,
                            request: {
                                type: 'GET',
                                url: providerUrl + '/' + result.provider
                            }
                        },
                        status: result.status,
                        category: result.category,
                        type: result.type,
                        seat: result.seat,
                        color: result.color
                    }
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Could not get bike with id: ${id}!`,
                error: err
            })
        })
})

// @route POST api/bikes
// @desc Create one bike
// @acces Public
router.post('/', (req, res, next) => {
    const providerId = req.body.provider;
    // Is succeeds this provider
    Provider.findById(providerId)
    .then(provider => {
        if (!provider){
            return res.status(404).json("Provider Not Found!")
        }
        const newBike = new Bike({
            _id: mongoose.Types.ObjectId(),
            provider: providerId,
            status: req.body.status,
            category: req.body.category,
            type: req.body.type,
            seat: req.body.seat,
            color: req.body.color
        })
        newBike.save()
        .then((result) => {
            res.status(201).json({
                message: "Successfully created new bike!",
                bike: { 
                    _id: result._id,
                    provider: {
                        _id: result.provider,
                        request: {
                            type: 'GET',
                            url: providerUrl + '/' + result.provider
                        }
                    },
                    status: result.status,
                    category: result.category,
                    type: result.type,
                    seat: result.seat,
                    color: result.color
                }
            })
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: "Could not create bike!",
            error: err
        })
    })
  
})

// @route DELETE api/bikes/:id
// @desc Delete one bike
// @acces Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Bike.findById(id)
    .then((bike) => {
        bike.remove()
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
            message: `Could not get bike with id: ${id}!`,
            error: err
        })
    })
})

module.exports = router;