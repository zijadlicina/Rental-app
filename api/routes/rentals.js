const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Bike = require('../../models/Bike')
const Rental = require('../../models/Rental')
const User = require('../../models/User')
const userUrl = "http://localhost:5000/api/users"
const bikeUrl = "http://localhost:5000/api/bikes"

// @route GET api/rentals
// @desc Get all rentals
// @acces Public
router.get('/', (req, res, next) => {
    Rental.find()
        .then((rentals) => {
            res.status(200).json({
                count: rentals.length,
                rentals: rentals.map(rental => {
                    return {
                        _id: rental._id,
                        user: {
                            _id: rental.user,
                            request: {
                                type: 'GET',
                                url: userUrl + '/' + rental.user
                            }
                        },
                        bike: {
                            _id: rental.bike,
                            request: {
                                type: 'GET',
                                url: bikeUrl + '/' + rental.bike
                            }
                        },
                        dateOut: rental.dateOut,
                        dateReturned: rental.dateReturned
                    }
                })
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not get rentals!",
                error: err
            })
        })
})

// @route GET api/rentals/:id
// @desc Get one rentals
// @acces Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Rental.findById(id)
        .then((rental) => {
            res.status(200).json({
                rental: {
                    _id: rental._id,
                    user: {
                        _id: rental.user,
                        request: {
                            type: 'GET',
                            url: userUrl + '/' + rental.user
                        }
                    },
                    bike: {
                        _id: rental.bike,
                        request: {
                            type: 'GET',
                            url: bikeUrl + '/' + rental.bike
                        }
                    },
                    dateOut: rental.dateOut,
                    dateReturned: rental.dateReturned
                }
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Could not get rental with id: ${id}!`,
                error: err
            })
        })
})

// @route POST api/rentals
// @desc Create one rental
// @acces Public
router.post('/', (req, res, next) => {
    const userId = req.body.userId;
    const bikeId = req.body.bikeId;
    // Is succeeds this user
    User.findById(userId)
    .then(user => {
        if (!user){
            return res.status(404).json("User Not Found!")
        }
        // Is succeeds this bike
        Bike.findById(bikeId)
        .then(bike => {
            if (!bike){
                return res.status(404).json("Bike Not Found!")
            }
            const newRental = new Rental({
                _id: mongoose.Types.ObjectId(),
                user: userId,
                bike: bikeId,
                dateOut: req.body.dateOut,
                dateReturned: req.body.dateReturned
            })
            newRental.save()
            .then((rental) => {
                res.status(201).json({
                    message: "Rental created!",
                    rental: {
                        _id: rental._id,
                        user: {
                            _id: rental.user,
                            request: {
                                type: 'GET',
                                url: userUrl + '/' + rental.user
                            }
                        },
                        bike: {
                            _id: rental.bike,
                            request: {
                                type: 'GET',
                                url: bikeUrl + '/' + rental.bike
                            }
                        },
                        dateOut: rental.dateOut,
                        dateReturned: rental.dateReturned
                    }
                })
            })
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: "Could not create rental!",
            error: err
        })
    })
})

// @route DELETE api/rentals/:id
// @desc Delete one rental
// @acces Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Rental.findById(id)
    .then((rental) => {
        rental.remove()
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
            message: `Could not get rental with id: ${id}!`,
            error: err
        })
    })
})

module.exports = router;