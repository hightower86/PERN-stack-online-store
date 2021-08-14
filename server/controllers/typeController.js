class TypeController{
    async getAll(req, res) {
        res.status(200).json({message:'get types works'})
    }
    async create(req, res) {
        res.status(200).json({message:'create new type works'})
    }
  
}

module.exports = new TypeController()