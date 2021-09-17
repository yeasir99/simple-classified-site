const express = require('express')
const {address} = require('../controllers/address')

const router = express.Router()

router.route('/').get(address)

module.exports = router
