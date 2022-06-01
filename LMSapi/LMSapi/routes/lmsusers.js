const express = require('express')

const userController = require('../controllers/users.js')
const resetPasswordController = require('../controllers/resetpassword.js')
const router = express.Router()
const Authonticate = require('../middlewares/auth.js')
router.post('/login',userController.userLogin)
router.post('/mentorregister',userController.mentorRegister)
router.post('/employeeregister',userController.employeeRegister)
router.get('/mentorslist',userController.getMentor)
router.put('/mentoredit',userController.mentorEdit)
router.put('/resetpassword',resetPasswordController.resetPassword)
module.exports = router
