const router = require('express').Router()
const Product = require('../db/models/product')
const Aisle = require('../db/models/aisle')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const data = await Product.findAll({ include: [{ model: Aisle }] })
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name } = req.body
        await Product.create({ name })
        res.sendStatus(200)
    } catch (err) {
        next(err)
    }
})
