const express     = require('express')
const bodyParser  = require('body-parser')
const course_router = express.Router()

course_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let course_controller = require('../controllers/course_c')

course_router.get("/",       course_controller.select_all)// Get all users.
course_router.get("/table",  course_controller.records_in_table_form)// Get all users & List in HTML Table.
course_router.get("/:id",    course_controller.select1_by_id)// Get a selected user.
course_router.post("/",      course_controller.register)// Save an user Record / Save Register Form data.
course_router.post("/check", course_controller.authenticate)// Check valid user or not.
course_router.delete("/:id", course_controller.delete1)// Delete an user Record
course_router.put("/:id",    course_controller.update1)// Delete an user Record
module.exports = course_router