const mongoose = require("mongoose")

const mentor_master = mongoose.model('mentor_master', new mongoose.Schema({
  user_name: {type: String, required: true, unique: false},
  email_id:  {type: String, required: true, unique: true },
  exp:{type: String, required: true, unique: true },
  linkedin_url:{type: String, required: true, unique: true },
  mob_num:{type: String, required: true, unique: true },
  timezone:{type: String, required: true, unique: true },
  Facilities:{type: String, required: true, unique: true },
  Technology:{type: String, required: true, unique: true },
  pass_word: {type: String, required: true, unique: false}
},{strict: true}))

module.exports = mentor_master