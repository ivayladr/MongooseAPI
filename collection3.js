const mongoose = require('mongoose');

const collection3Schema = new mongoose.Schema({
    user: String,
    age: Number
});

module.exports = mongoose.model('Collection3', collection3Schema);
