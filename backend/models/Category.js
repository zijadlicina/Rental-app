const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: [true, "Please provide a name to the category"],
  },
});

module.exports = Category = mongoose.model("Category", CategorySchema);