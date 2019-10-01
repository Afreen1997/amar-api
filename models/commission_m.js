const mongoose = require("mongoose")

const commission_master = mongoose.model('commission_master', new mongoose.Schema({
   
    training_fee: {type: String, required: true, unique: false},
    commission_percentage: {type: String, required: true, unique: false},
    received_pending: {type: String, required: true, unique: false}

},{strict: true}))

module.exports = commission_master