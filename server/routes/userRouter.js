const Router = require('express')

const router = Router()

router.get('/auth', (req, res) => {
    res.status(200).json({messgage:'auth works'})
})
router.post('/registration',)
router.post('/login',)


module.exports = router