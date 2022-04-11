const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    surname: { type: String, required: true },
    contact: { type: Number},
    email: { type: String, required: true },
    location: { type: String }
})

module.exports = User = mongoose.model('User', UserSchema)