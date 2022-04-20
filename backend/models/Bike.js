const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true, 
        required: [true, 'Please provide a name to the bike']
    },
    provider: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Provider', 
        required: [true, 'Please provide a field "provider_id" to the bike']
    },
    rating: {
        type: Number,
        required: [true, 'Please provide a rating to the bike']
    },
    model: {
        type: String,
        required: [true, 'Please provide a model to the bike'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price to the bike'],
    },
    description: {
        type: String,
        default: "No description"
    },
    status: { type: Boolean, default: false},
    category: { type: String, default: 'Bike' },
    type: { type: String, default: 'family' },
    seat: { type: String, default: 'normal' },
    color: { type: String, default: 'black' },
    weight: { type: String, default: '12kg'}
})

module.exports = Bike = mongoose.model('Bike', BikeSchema)