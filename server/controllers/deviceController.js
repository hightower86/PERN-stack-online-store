const { Device } = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError")

class DeviceController{
    async getAll(req, res) {
        try {
            const devices = Device.findAll()
            return res.json(devices)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        const {id} = req.query
        try {
            const device = Device.findOne({ id })
            return res.json(device)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
    async create(req, res, next) {
      
        try {
            const { name, price, brandId, typeId, info } = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const device = Device.create({ name, price, brandId, typeId, img:fileName})
            
            return res.json(device)
        } catch (e) {
             next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new DeviceController()