const Sequelize = require('sequelize')
const db = require('../db')

const Aisle = db.define('aisle', {
    name: {
        type: Sequelize.STRING,
    },
})

module.exports = Aisle
