const Sequelize = require('sequelize') 

const settings = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        min: 0,
        max: 5,
        iddle: 10000
    },
    logging: false
}

const sequelize = new Sequelize('ovo', 'root', '', settings)

module.exports = sequelize