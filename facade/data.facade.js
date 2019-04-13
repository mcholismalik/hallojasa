const express = require('express')
const bcrypt = require('bcrypt')

const Joi = require('joi')
const validate = require('express-validation')

const ApiResponse = require('../model/apiresponse')
const Customers = require('../model/customers.model')
const modelvalid = require("../middleware/validation/model-validation")

const router = express.Router()

router.post('/', validate(modelvalid.findnumber), (req, res) => {
    let arr = req.body.number.toString().split('');
    (arr.includes(req.body.find.toString())) ? res.json(ApiResponse.ok(true)) :  res.json(ApiResponse.ok(false))
})

module.exports = router