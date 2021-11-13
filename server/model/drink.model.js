const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    vendor: String,
    ingredients: [String]
})

mongoose.model('drink', drinkSchema);
