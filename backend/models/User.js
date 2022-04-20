const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String, 
        required: [true, "Please provide a username"]
    },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    contact: { type: Number},
    email: {
        type: String, 
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please provide a valid email"
        ]
    },
    location: { type: String },
    password: {
        type: String, 
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

module.exports = User = mongoose.model('User', UserSchema)