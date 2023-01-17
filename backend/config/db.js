const mongoose = require('mongoose');

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log("MongoDB connected SUCCESS...")
    } catch (error) {
        console.log("MongoDB connected FAIL...")
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
