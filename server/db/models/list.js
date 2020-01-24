const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
    product: {
        type: Sequelize.STRING,
    },
    aisle: {
        type: Sequelize.INTEGER,
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
})

module.exports = List
