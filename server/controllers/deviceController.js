class DeviceController{
    async getAll(req, res) {
        res.status(200).json({message:'get deviice works'})
    }
    async getOne(req, res) {
        res.status(200).json({message:'get deviice works'})
    }
    async create(req, res) {
        res.status(200).json({message:'create new dev works'})
    }
  
}

module.exports = new DeviceController()