const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: true},
    message: { type: String, required: true},
    grade: {type: Number, default: 3, required: true}
}, {timestamps: true})

module.exports = Feedback = mongoose.model("Feedback", FeedbackSchema);