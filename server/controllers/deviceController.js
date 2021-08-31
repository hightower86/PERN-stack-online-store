const { Device, DeviceInfo } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class DeviceController {
  async getAll(req, res) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      let devices;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;

      if (!brandId && !typeId) {
        devices = await Device.findAll({ limit, offset });
      }
      if (!brandId && typeId) {
        devices = await Device.findAll({ where: { typeId }, limit, offset });
      }
      if (brandId && !typeId) {
        devices = await Device.findAll({ where: { brandId }, limit, offset });
      }
      if (brandId && typeId) {
        devices = await Device.findAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }
      return res.json(devices);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const device = await Device.findOne({
        where: { id },
        include: [{ model: DeviceInfo, as: "info" }],
      });
      return res.json(device);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      console.log({ fileName });
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.array.forEach(
          async (i) =>
            await DeviceInfo.create({
              title: i.title,
              description: i.description,
              deviceId: device.id,
            })
        );
      }

      return res.json(device);
    } catch (e) {
      console.log("=============", { e });
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new DeviceController();
