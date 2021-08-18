const Router = require('express')

const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

const router = Router()

router.get('/auth',authMiddleware, userController.check)
router.post('/registration',userController.registration)
router.post('/login',userController.login)


module.exports = router