const { Type } = require("../models/models");


class TypeController{
   
    async create(req, res) {
        const { name } = req.body;
        try {
            const type = await Type.create({ name })
            res.json(type)
        } catch (error) {
            res.status(500).json(error.message)
        }
       
    }
    async getAll(req, res) {
        try {
            const types = await Type.findAll()
            res.json(types)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
  
}

module.exports = new TypeController()