const mongoose = require("mongoose")

const User2Schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    username: {
        type: String,
        required: [true, "Please provide a username!"],
        minlength: 5,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide a username!"],
        minlength: 5
    },
    loaction: {
        type:String,
        default: "City",
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        minlength: 6
    },
}, {
    timestamps: true
})

const User2 = mongoose.model("User2", User2Schema)

module.exports = User2