const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true},
    reqSent: { type: Date, required: true},
    reqApproved: { type: Date, required: false},
    dateOut: { type: Date, required: true},
    dateReturned: { type: Date, required: true},
    status: {type: Boolean, default: false},
    completed: {type: Boolean, default: false},
    rejected: {type: Boolean, default: false},
    quantity: {type: Number, default: 1},
    price: {type: String, default: 0},
    pickLocation: {type: String, default: "city"},
    reqCompleted: { type: Date, required: false}, 
    feedback: {type: Boolean, default: false},
    feedbackSent: {type: Date, required: false}
},  { timestamps: true })

module.exports = Rental = mongoose.model('Rental', RentalSchema)