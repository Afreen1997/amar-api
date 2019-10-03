const express     = require('express')
const bodyParser  = require('body-parser')
const trainer_router = express.Router()

trainer_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let trainer_controller = require('../controllers/trainer_c')

trainer_router.get("/",       trainer_controller.select_all)// Get all users.
trainer_router.get("/table",  trainer_controller.records_in_table_form)// Get all users & List in HTML Table.
trainer_router.get("/:id",    trainer_controller.select1_by_id)// Get a selected user.
trainer_router.post("/",      trainer_controller.register)// Save an user Record / Save Register Form data.
trainer_router.post("/check", trainer_controller.authenticate)// Check valid user or not.
trainer_router.delete("/:id", trainer_controller.delete1)// Delete an user Record
trainer_router.put("/:id",    trainer_controller.update1)// Delete an user Record
module.exports = trainer_router