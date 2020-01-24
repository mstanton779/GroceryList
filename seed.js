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
