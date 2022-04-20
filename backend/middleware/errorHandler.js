const ErrorResponse = require('../utils/errorResponse')

// This is global error handler
const errorHandler = (err, req, res, next) => {
 //   console.log(err)    // we can see everything about error
    let error = { ...err }
    error.message = err.message
    // !???
    // when id is invalid, or not found
    if (err.name === "CastError") {
        const message = "Resource Not Found"
        error = new ErrorResponse(message, 404)
    }
    // duplicate key, field error
    if (err.code === 11000) {
        const message = "Duplicate field value entered"
        error = new ErrorResponse(message, 400) // 400 - invalid value
    }
    // mongoose give validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(error => error.message).join(', ');
        error = new ErrorResponse(message, 400)
    }
    // add more check...
    res.status(error.statusCode || 500).json({
        succes: false,
        error: error.message || 'Server Error'
    })
}

module.exports = errorHandler;