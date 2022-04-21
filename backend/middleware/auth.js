const jwt = require('jsonwebtoken')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

exports.protect = async(req, res, next) => {
    // Is token exist
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    if (!token) {
        next(new ErrorResponse("Not authorized to access this route", 401))
    }
    try{
        // Is token valid?
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        if (!user){
            next(new ErrorResponse("No user found with this id", 404))      
        }
        req.user = user
        next()
    }
    catch(error){
        next(new ErrorResponse("Not authorized to access this route", 401))   
    }
}