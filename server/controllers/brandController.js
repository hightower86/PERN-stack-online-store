class BrandController{
    async getAll(req, res) {
        res.status(200).json({message:'get brands works'})
    }
    async create(req, res) {
        res.status(200).json({message:'create new brand works'})
    }
  
}

module.exports = new BrandController()