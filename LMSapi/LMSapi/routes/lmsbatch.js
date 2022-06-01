const express = require('express')
const batchController = require('../controllers/batchdetails.js')
const router = express.Router()
const Authonticate = require('../middlewares/auth.js')
router.post('/batchregister',batchController.batchRegister)
//router.post('/batchregister',Authonticate.authorizeAdmin ,batchController.batchRegister)


module.exports = router