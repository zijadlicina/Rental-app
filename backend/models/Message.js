const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    userTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    type: { type: String, required: true},
    text: { type: String, required: true},
    textToUser: { type: String, required: true},
    rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: false},
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: false},
    feedback: { type: mongoose.Schema.Types.ObjectId, ref: 'Feedback', required: false},
    seen: {type: Boolean, default: false},
    seenUserTo: {type: Boolean, default: false},
},   { timestamps: true })

module.exports = Messages = mongoose.model("Messages", MessagesSchema);