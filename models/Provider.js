const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String},
    location: { type: String, required: true }
})

module.exports = Provider = mongoose.model('Provider', ProviderSchema)