const { Brand } = require("../models/models")

class BrandController{
    async getAll(req, res) {
        try {
            const brands = await Brand.findAll()
        return res.json(brands)  
        } catch (error) {
            return res.status(500).json(error.message)
        }
      

    }
    async create(req, res) {
        try {
            const brand = await Brand.create({ name: req.body.name })
            return res.json(brand)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
  
}

module.exports = new BrandController()