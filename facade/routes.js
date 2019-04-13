const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwt.authorization');

// authentication route
router.use('/api/v2/auth', require('./authenticate.facade'));

// jwt authorization middleware
router.use(jwtAuth);

// app route
router.use('/api/v2/customer', require('./customers.facade'));
router.use('/api/v2/data/findnumber', require('./data.facade'));

module.exports = router;