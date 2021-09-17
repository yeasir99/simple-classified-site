const express = require('express')
const {getCatagoryData} = require('../controllers/catagory')

const router = express.Router()

router.route('/').get(getCatagoryData)

module.exports = router
