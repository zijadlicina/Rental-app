const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    status: { type: Boolean, default: false},
    category: { type: String, default: 'Bike' },
    type: { type: String, default: 'family' },
    seat: { type: String, default: 'normal' },
    color: { type: String, default: 'black' },
    weight: { type: String, default: '12kg'}
})

module.exports = Bike = mongoose.model('Bike', BikeSchema)