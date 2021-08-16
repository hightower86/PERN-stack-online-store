const { Brand } = require("../models/models")

class BrandController{
    async getAll(req, res) {
        try {
            const brands = await Brand.findAll()
        res.json(brands)  
        } catch (error) {
            res.status(500).json(error.message)
        }
      

    }
    async create(req, res) {
        try {
            const brand = await Brand.create({ name: req.body.name })
            res.json(brand)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
  
}

module.exports = new BrandController()