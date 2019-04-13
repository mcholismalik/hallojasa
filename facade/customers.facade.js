const express = require('express')
const bcrypt = require('bcrypt')

const Joi = require('joi')
const validate = require('express-validation')

const ApiResponse = require('../model/apiresponse')
const Customers = require('../model/customers.model')

const router = express.Router()

router.get('/profile/:id_profile', validate({
    params: {
        id_profile: Joi.number().required()
    }
}), async (req, res) => {
    try {
        let data = await Customers.findByPk(req.params.id_profile)
        if (data) {
            delete data.dataValues['hash']
            res.json(ApiResponse.ok(data))
        } else {
            res.json(ApiResponse.notFound())
        }
    } catch (err) {
        res.json(ApiResponse.unknownError(err))
    }
})

module.exports = router