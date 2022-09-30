const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true},
    dateOut: { type: Date, required: true},
    dateReturned: { type: Date, required: true},
    status: {type: Boolean, default: true},
    quantity: {type: Number, default: 1},
    price: {type: String, default: 0}
})

module.exports = Rental = mongoose.model('Rental', RentalSchema)