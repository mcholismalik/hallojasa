const Joi = require('joi');

module.exports = {
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    },
    register: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required(),
            full_name: Joi.string().required(),
            email: Joi.string().required(),
            mobile_phone: Joi.number().required()
        }
    },
    findnumber: {
        body: {
            number: Joi.number().required(),
            find: Joi.number().required()
        }
    }
};