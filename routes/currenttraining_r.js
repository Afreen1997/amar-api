const express     = require('express')
const bodyParser  = require('body-parser')
const currenttraining_router = express.Router()

currenttraining_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let currenttraining_controller = require('../controllers/currenttraining_c')

currenttraining_router.get("/",       currenttraining_controller.select_all)// Get all users.
currenttraining_router.get("/table",  currenttraining_controller.records_in_table_form)// Get all users & List in HTML Table.
currenttraining_router.get("/:id",   currenttraining_controller.select1_by_id)// Get a selected user.
currenttraining_router.post("/",      currenttraining_controller.register)// Save an user Record / Save Register Form data.
currenttraining_router.delete("/:id", currenttraining_controller.delete1)// Delete an user Record
currenttraining_router.put("/:id",    currenttraining_controller.update1)// Delete an user Record
module.exports = currenttraining_router