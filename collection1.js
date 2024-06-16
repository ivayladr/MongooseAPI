const mongoose = require('mongoose');

const collection1Schema = new mongoose.Schema({
    name: String,
    value: Number
});

module.exports = mongoose.model('Collection1', collection1Schema);
