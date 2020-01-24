const { db } = require('./server/db')
const { red, green } = require('chalk')
const { Product } = require('./server/db/index')
const Aisle = require('./server/db/models/aisle')

const seed = async () => {
    try {
        await db.sync({ force: true })
        const milk = await Product.create({
            name: 'milk',
        })
        const dairy = await Aisle.create({
            name: 'dairy',
        })
        const beverages = await Aisle.create({ name: 'beverages' })
        const beer = await Product.create({ name: 'beer' })
        const deoderant = await Product.create({ name: 'deoderant' })
        const selfCare = await Aisle.create({ name: 'self care' })
        const potatoChips = await Product.create({ name: 'potato chips' })
        const snacks = await Aisle.create({ name: 'snacks' })
        const bakingCondiments = await Aisle.create({
            name: 'baking and condiments',
        })
        const mustard = await Product.create({ name: 'mustard' })
        const worldFoods = await Aisle.create({ name: 'world foods' })
        const pasta = await Product.create({ name: 'pasta' })
        await pasta.setAisle(worldFoods)
        await mustard.setAisle(bakingCondiments)
        await potatoChips.setAisle(snacks)
        await deoderant.setAisle(selfCare)
        await beer.setAisle(beverages)
        await milk.setAisle(dairy)
    } catch (err) {
        console.log(err)
    }
}

if (require.main === module) {
    seed()
        .then(() => {
            console.log(green('Seeding success!'))
            db.close()
        })
        .catch(err => {
            console.error(red('Oh noes! Something went wrong!'))
            console.error(err)
            db.close()
        })
}
