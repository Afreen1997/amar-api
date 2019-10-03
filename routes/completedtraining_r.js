const express     = require('express')
const bodyParser  = require('body-parser')
const completedtraining_router = express.Router()

completedtraining_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let completedtraining_controller = require('../controllers/completedtraining_c')

completedtraining_router.get("/",       completedtraining_controller.select_all)// Get all users.
completedtraining_router.get("/table",  completedtraining_controller.records_in_table_form)// Get all users & List in HTML Table.
completedtraining_router.get("/:id",    completedtraining_controller.select1_by_id)// Get a selected user.
completedtraining_router.post("/",      completedtraining_controller.register)// Save an user Record / Save Register Form data.
completedtraining_router.delete("/:id", completedtraining_controller.delete1)// Delete an user Record
completedtraining_router.put("/:id",    completedtraining_controller.update1)// Delete an user Record
module.exports = completedtraining_router