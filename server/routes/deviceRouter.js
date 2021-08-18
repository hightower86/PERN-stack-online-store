const Router = require('express')

const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

const router = Router()

router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.post('/', checkRole('ADMIN'), deviceController.create)


module.exports = router 