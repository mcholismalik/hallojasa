const Sequelize = require('sequelize')
const sequelize = require('../config/datasource')

const Customers = sequelize.define('customers', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING },
    hash: { type: Sequelize.STRING },
    full_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    mobile_phone: { type: Sequelize.INTEGER },
    is_activated: { type: Sequelize.INTEGER },
    is_email_verified: { type: Sequelize.INTEGER },
    temp_pin_verify: { type: Sequelize.INTEGER },
    reward_point: { type: Sequelize.INTEGER },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
    device_signup: { type: Sequelize.DATE },
    device_last_signin: { type: Sequelize.DATE },
    social_media_provider: { type: Sequelize.STRING },
    ovo_saldo: { type: Sequelize.INTEGER }
}, { timestamps: false })

module.exports = Customers