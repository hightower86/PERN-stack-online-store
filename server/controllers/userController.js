class UserController {

    async registration(req, res) {
        
        res.status(200).json({messgage:'registration works'})
    }

    async login(req, res) {
        res.status(200).json({messgage:'login works'})
    }

    async check(req, res) {
        res.status(200).json({messgage:'auth works'})
    }
}

module.exports = new UserController();