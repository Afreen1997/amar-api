const mongoose = require("mongoose")

const course_master = mongoose.model('course_master', new mongoose.Schema({
  course_name: {type: String, required: true, unique: false}
 
},{strict: true}))

module.exports = course_master