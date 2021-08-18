const Router = require('express')

const typeController = require('../controllers/typeController')

const checkRole = require('../middleware/checkRoleMiddleware')

const router = Router()

router.get('/',typeController.getAll)
router.post('/', checkRole('ADMIN'), typeController.create)


module.exports = router 