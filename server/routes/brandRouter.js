const Router = require('express')
const brandController = require('../controllers/brandController')

const router = Router()

router.get('/brands',brandController.getAll)
// router.get('/brand/:id',brandController.brand)
router.post('/brand',brandController.create)


module.exports = router 