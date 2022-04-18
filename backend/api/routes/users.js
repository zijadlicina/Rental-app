const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../../models/User')

// @route GET api/users
// @desc Get all users
// @acces Public
router.get('/', (req, res, next) => {
    User.find()
        .then((users) => {
            res.status(200).json({
                count: users.length,
                users: users
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not get users!",
                error: err
            })
        })
})

// @route GET api/users/:id
// @desc Get one user
// @acces Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {
            res.status(200).json({
                user: user
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Could not get user with id: ${id}!`,
                error: err
            })
        })
})

// @route POST api/users
// @desc Create one user
// @acces Public
router.post('/', (req, res, next) => {
    const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
    })
    newUser.save()
        .then((result) => {
            res.status(201).json({
                message: "User created!",
                user: result
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Could not create user!",
                error: err
            })
        })
})

// @route DELETE api/users/:id
// @desc Delete one user
// @acces Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then((user) => {
        user.remove()
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
            message: `Could not get user with id: ${id}!`,
            error: err
        })
    })
})

module.exports = router;