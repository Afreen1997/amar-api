const mongoose = require("mongoose")

const currenttraining_master = mongoose.model('currenttraining_master', new mongoose.Schema({
 regcode: {type: String, required: true, unique: false},
 technology_name:  {type: String, required: true, unique: false},
 trainer_name: {type: String, required: true, unique: false},
 percentage:  {type: String, required: true, unique: false}
 
},{strict: true}))

module.exports = currenttraining_master