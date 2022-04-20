const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String, 
        unique: true,
        minlength: 4,
        required: [true, "Please provide a username"]
    },
    name: { type: String, default: "Name"},
    surname: { type: String, default: "Surname"},
    contact: { type: String, default: "000-000-000"},
    email: {
        type: String, 
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$$/,
            "Please provide a valid email"
        ]
    },
    location: { type: String, default: "City" },
    password: {
        type: String, 
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, {
    timestamps: true
})

UserSchema.pre("save", async function (next) {
    // wont re-hashed it
    if(!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10) // higher number more secure
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = User = mongoose.model('User', UserSchema)