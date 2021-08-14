const sequelize = require('../db')

const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email:{type:DataTypes.STRING,unique:true},
    password: { type: DataTypes.STRING },
    role:{type:DataTypes.STRING,defaultValue:'USER'}
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketDevice = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Device = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING,unique:true,allowNull:false },
    price: { type: DataTypes.INTEGER,allowNull:false },
    rating: {type:DataTypes.INTEGER,defaultValue:0},
    img: {type:DataTypes.STRING,allowNull:false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: sequelize.DataTypes.STRING, unique: true, allowNull: false },
    description: {type :sequelize.DataTypes.STRING}
})

const Rating = sequelize.define('rating', {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rating: {type:sequelize.DataTypes.INTEGER, defaultValue:0}
})
const Type = sequelize.define('type', {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:sequelize.DataTypes.STRING, allowNull:false}
})
const Brand = sequelize.define('brand', {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:sequelize.DataTypes.STRING, allowNull:false}
})
const TypeBrand = sequelize.define('type_brand', {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

module.exports = {
    User,
    Basket,
    BasketDevice,
    Rating,
    Device,
    DeviceInfo,
    Type,
    Brand,
    TypeBrand
}