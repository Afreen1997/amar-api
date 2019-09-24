const mongoose = require("mongoose")

const user_master = mongoose.model('user_master', new mongoose.Schema({
  user_name: {type: String, required: true, unique: false},
  email_id:  {type: String, required: true, unique: true },
  pass_word: {type: String, required: true, unique: false}
},{strict: true}))

module.exports = user_master