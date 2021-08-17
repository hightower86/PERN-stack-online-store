const bcrypt = require('bcrypt')
const {User,Basket} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')

class UserController {

    async registration(req, res, next) {
        const { email, password, role } = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('email and password are required'))
        }

        const candidate = await User.findOne({ where: { email } })
        
        if (candidate) {
            return next(ApiError.badRequest('This email address is already registered'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        
        const user = await User.create({ email, role, password: hashPassword })
        
        const basket = await Basket.create({userId:user.id})
        
        const token = jwt.sign(
            { id: user.id, email, role },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
        
        return res.json({ token })
    }

    async login(req, res) {
        res.status(200).json({messgage:'login works'})
    }

    async check(req, res,next) {
        const { id } = req.query
        if (!id) {
            next(ApiError.badRequest('Id is required'))
        }
        res.json(id)
    }
}

module.exports = new UserController();