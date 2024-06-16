const mongoose = require('mongoose');

const collection2Schema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Collection2', collection2Schema);
