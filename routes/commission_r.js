const express     = require('express')
const bodyParser  = require('body-parser')
const commission_router = express.Router()

commission_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let commission_controller = require('../controllers/commission_c')

commission_router.get("/",       commission_controller.select_all)// Get all users.
commission_router.get("/table",  commission_controller.records_in_table_form)// Get all users & List in HTML Table.
commission_router.get("/:id",    commission_controller.select1_by_id)// Get a selected user.
commission_router.post("/",      commission_controller.register)// Save an user Record / Save Register Form data.
commission_router.post("/check", commission_controller.authenticate)// Check valid user or not.
commission_router.delete("/:id", commission_controller.delete1)// Delete an user Record
commission_router.put("/:id",    commission_controller.update1)// Delete an user Record
module.exports = commission_router