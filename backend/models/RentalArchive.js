const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RentalArchiveSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true},
    reqSent: { type: Date, required: true},
    reqRejected: {type: Date, required: false},
    dateOut: { type: Date, required: true},
    dateReturned: { type: Date, required: true},
    rejected: {type: Boolean, default: false},
    quantity: {type: Number, default: 1},
    price: {type: String, default: 0},
    pickLocation: {type: String, default: "city"},
    reasonMessage: { type:String, default: ""}
})

module.exports = Rental = mongoose.model('RentalArchive', RentalArchiveSchema)