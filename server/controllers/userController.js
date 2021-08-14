const ApiError = require('../error/ApiError')

class UserController {

    async registration(req, res) {
        
        res.status(200).json({messgage:'registration works'})
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