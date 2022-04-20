const mongoose = require('mongoose')

const User = require('../models/User')
const errorHandler  = require('../middleware/errorHandler')
const asyncHandler  = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');


exports.register = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    const newUser = await User.create({
        _id: mongoose.Types.ObjectId(),
        username, email, password
    })
    res.status(201).json({
        succes: true,
        user: newUser
    })
})

exports.login = (req, res, next) => {
    res.send("This is login route")
}

exports.forgotPassword = (req, res, next) => {
    res.send("This is forgot password route")
}

exports.resetPassword = (req, res, next) => {
    res.send("This is Reset password route")
}