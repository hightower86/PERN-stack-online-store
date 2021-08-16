const { Type } = require("../models/models");


class TypeController{
   
    async create(req, res) {
        const { name } = req.body;
        try {
            const type = await Type.create({ name })
           return  res.json(type)
        } catch (error) {
            return res.status(500).json(error.message)
        }
       
    }
    async getAll(req, res) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
  
}

module.exports = new TypeController()