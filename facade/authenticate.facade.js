const express = require('express')
const config = require('../config/config.js')

const Jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Joi = require('joi')
const validate = require('express-validation')
const modelvalid = require("../middleware/validation/model-validation")

const ApiResponse = require('../model/apiresponse')
const Customers = require('../model/customers.model')

const router = express.Router()

router.post('/login', validate(modelvalid.login), async (req, res) => {
    try {
        let data = await Customers.findOne({ where: { username: req.body.username } })
        if (data) {
            let check = await bcrypt.compare(req.body.password, data.hash)
            if (check == true) {
                try {
                    let token = Jwt.sign(config.payLoad, config.secretKey)
                    res.json(ApiResponse.ok('Login success!', {
                        token: token
                    }))
                } catch (ex) {
                    res.json(ApiResponse.internalServerError('Internal Server Error', ex))
                }
            } else {
                res.json(ApiResponse.unAuthorized())
            }
        } else {
            res.json(ApiResponse.notFound())
        }
    } catch (err) {
        console.log('tes')
        res.json(ApiResponse.unknownError(err))
    }
})

router.post('/register', validate(modelvalid.register), async (req, res) => {
    try {
        let hash = await bcrypt.hash(req.body.password, 10)
        req.body['hash'] = hash

        let data = await Customers.create(req.body)
        if(data) {
            delete data.dataValues['hash']
            res.json(ApiResponse.created(data))
        } else {
            res.json(ApiResponse.unProcessableEntity())
        }
    } catch(err) {  
        res.json(ApiResponse.unknownError())
    }
})

module.exports = router