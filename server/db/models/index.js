const Product = require('./product')
const Aisle = require('./aisle')

Aisle.hasMany(Product)
Product.belongsTo(Aisle)

module.exports = { Product, Aisle }
