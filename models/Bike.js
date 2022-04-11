const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true},
    status: { type: Boolean, default: false},
    category: { type: String, default: 'Bike' },
    type: { type: String, default: 'Family' },
    seat: { type: Number, default: 1 },
    color: { type: String, default: 'black' }
})

module.exports = Bike = mongoose.model('Bike', BikeSchema)