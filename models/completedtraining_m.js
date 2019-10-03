const mongoose = require("mongoose")

const completedtraining_master = mongoose.model('completedtraining_master', new mongoose.Schema({
 image: {type: String, required: true, unique: false},
 trainer_name: {type: String, required: true, unique: false},
 technology:  {type: String, required: true, unique: false},
 status:  {type: String, required: true, unique: false}
 
},{strict: true}))

module.exports = completedtraining_master