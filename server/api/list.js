const router = require('express').Router()
const List = require('../db/models/list')
const Product = require('../db/models/product')
const Aisle = require('../db/models/aisle')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const data = await List.findAll({
            include: [{ model: Product }, { model: Aisle }],
            order: [['aisle', 'ASC']],
        })
        res.send(data)
    } catch (err) {
        next(err)
    }
})
router.post('/', async (req, res, next) => {
    try {
        let { name, quantity } = req.body
        const lowerName = name.toLowerCase()
        const product = await Product.findOne({
            where: { name: lowerName },
            include: [{ model: Aisle }],
        })
        const { aisleId } = product
        const list = await List.create({
            product: name,
            aisle: aisleId,
            quantity,
        })
        res.send(list)
    } catch (err) {
        next(err)
    }
})
