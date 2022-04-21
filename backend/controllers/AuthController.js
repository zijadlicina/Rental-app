const mongoose = require('mongoose')

const User = require('../models/User')
const errorHandler  = require('../middleware/errorHandler')
const asyncHandler  = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

exports.register = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    const newUser = await User.create({
        _id: mongoose.Types.ObjectId(),
        username, email, password
    })
    sendToken(newUser, 201, res)
})

exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next(new ErrorResponse(`Please provide email and password`, 400))
    }   
    // is exist User with 'email'
    const user = await User.findOne({ email }).select("+password")  // everything return
    if (!user) {
        return next(new ErrorResponse(`Invalid credentials`, 401)) // 401 - "unauthorized"
    }
    // compare passwords
                    // "findOne" return us a model, and "User" model have access to "matchPassword" function
    const isMatch = await user.matchPasswords(password)
    if (!isMatch){
        return next(new ErrorResponse(`Invalid credentials`, 401))
    }
    sendToken(user, 200, res)
})
exports.forgotPassword = asyncHandler (async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne( {email })
    if (!user) {
        next(new ErrorResponse("Email could not be sent", 404))
    }
    // save new field "resetPasswordToken" for user in database
    const resetToken = await user.getResetPasswordToken()
    await user.save()

    const resetUrl = `http://localhost:5001/passwordReset/${resetToken}`
    const message = `
    <h1>You have requested a new password reset</h1>
    <p>Please go to this link to reset your password</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`
    try {
        // function from utils
        await sendEmail({
            to: user.email,
            subject: "Password Reset Request",
            text: message
        })
        res.status(200).json({
            succes: true,
            data: "Email sent"
        })
    } catch (error) {
        // remove values of this fields
        user.getResetPasswordToken = undefined
        user.getResetPasswordExpire = undefined
        await user.save()
        return next(new ErrorResponse(`Email could not be sent`, 500))
    }
})

exports.resetPassword = (req, res, next) => {
    res.send("This is Reset password route")
}

const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedToken()
    res.status(statusCode).json({
        succes: true,
        token
    })
}