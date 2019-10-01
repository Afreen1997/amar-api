const mongoose = require("mongoose")

const payment_master = mongoose.model('payment_master', new mongoose.Schema({
   
    training_name: {type: String, required: true, unique: false},
    training_fee: {type: String, required: true, unique: false},
    payment_received: {type: String, required: true, unique: false},
    payment_pending: {type: String, required: true, unique: false}

},{strict: true}))

module.exports = payment_master