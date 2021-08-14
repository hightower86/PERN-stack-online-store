const Router = require('express')

const deviceController = require('../controllers/deviceController')

const router = Router()

router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.post('/',deviceController.create)


module.exports = router 