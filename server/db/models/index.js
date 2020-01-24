const Product = require('./product')
const Aisle = require('./aisle')
const List = require('./list')
Aisle.hasMany(Product)
Product.belongsTo(Aisle)
List.hasMany(Product)
Product.belongsTo(List)
List.hasMany(Aisle)
Aisle.belongsTo(List)

module.exports = { Product, Aisle, List }
