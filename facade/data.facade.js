const express = require('express')
const bcrypt = require('bcrypt')

const Joi = require('joi')
const validate = require('express-validation')

const ApiResponse = require('../model/apiresponse')
const Customers = require('../model/customers.model')
const modelvalid = require("../middleware/validation/model-validation")

const router = express.Router()

router.post('/', validate(modelvalid.findnumber), (req, res) => {
    let arr = req.body.number.split('')
    
    console.log(arr)
    // console.log(req.body.number.length)
    // for(let n in arr) {
    //     console.log(n)
    // }
    res.json(ApiResponse.ok(req.body.number))
})

module.exports = router