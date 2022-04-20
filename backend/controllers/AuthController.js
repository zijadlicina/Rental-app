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

exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next(new ErrorResponse(`Please provide email and password`, 400))
    }   
    // is exist User with 'email'
    const user = await User.findOne({ email }).select("+password")  // everything return
    if (!user) {
        return next(new ErrorResponse(`Invalid credentials`, 404))
    }
    // compare passwords
                    // "findOne" return us a model, and "User" model have access to "matchPassword" function
    const isMatch = await user.matchPasswords(password)
    if (!isMatch){
        return next(new ErrorResponse(`Invalid credentials`, 404))
    }
    res.status(200).json({
        succes: true,
        user: user,
        token: "d6da542chtr789ayfe2"
    })
})
exports.forgotPassword = (req, res, next) => {
    res.send("This is forgot password route")
}

exports.resetPassword = (req, res, next) => {
    res.send("This is Reset password route")
}