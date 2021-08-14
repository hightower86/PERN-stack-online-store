class UserController {

    async registration(req, res) {
        
        res.status(200).json({messgage:'registration works'})
    }

    async login(req, res) {
        res.status(200).json({messgage:'login works'})
    }

    async check(req, res) {
        const query = req.query
        res.json(query)
    }
}

module.exports = new UserController();