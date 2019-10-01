const express     = require('express')
const bodyParser  = require('body-parser')
const payment_router = express.Router()

payment_router.use(bodyParser.urlencoded({extended: true}))
//user_router.use(bodyParser.json())
// user_router.get('/', (req, res)=> res.send(`Got '/user GET' Request`))// Keep for testing purpose

let payment_controller = require('../controllers/payment_c')

payment_router.get("/",       payment_controller.select_all)// Get all users.
payment_router.get("/table",  payment_controller.records_in_table_form)// Get all users & List in HTML Table.
payment_router.get("/:id",    payment_controller.select1_by_id)// Get a selected user.
payment_router.post("/",      payment_controller.register)// Save an user Record / Save Register Form data.
payment_router.post("/check", payment_controller.authenticate)// Check valid user or not.
payment_router.delete("/:id", payment_controller.delete1)// Delete an user Record
payment_router.put("/:id",    payment_controller.update1)// Delete an user Record
module.exports = payment_router