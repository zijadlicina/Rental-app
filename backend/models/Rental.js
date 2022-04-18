const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true},
    dateOut: { type: Date, default: Date.now},
    dateReturned: { type: Date, default: Date.now},
})

module.exports = Rental = mongoose.model('Rental', RentalSchema)