const mongoose = require("mongoose")

const admin_master = mongoose.model('admin_master', new mongoose.Schema({
 
  email_id:  {type: String, required: true, unique: true },
  pass_word: {type: String, required: true, unique: false}
},{strict: true}))

module.exports = admin_master