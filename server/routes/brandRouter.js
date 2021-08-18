const Router = require('express')
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')

const router = Router()

router.get('/',brandController.getAll)
// router.get('/brand/:id',brandController.brand)
router.post('/', checkRole('ADMIN'), brandController.create)


module.exports = router 