const mongoose = require("mongoose")

const trainerdetails_master = mongoose.model('trainerdetails_master', new mongoose.Schema({
    image:{type: String, required: true, unique: false},
    Trainer_name: {type: String, required: true, unique: false},
    Years_of_Experience:{type: String, required: true, unique: false},
    Completed_Training:{type: String, required: true, unique: false},
    Fee_Charged: {type: String, required: true, unique: false},
    Time_Slot: {type: String, required: true, unique: false},
    Specializations: {type: String, required: true, unique: false}

},{strict: true}))

module.exports = trainerdetails_master