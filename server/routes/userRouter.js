const Router = require('express')

const userController = require('../controllers/userController')

const router = Router()

router.get('/auth', userController.check)
router.post('/registration',userController.registration)
router.post('/login',userController.login)


module.exports = router