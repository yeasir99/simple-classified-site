const express = require('express')
const {loginUser, getUser} = require('../controllers/login')
const protect = require('../middleware/protect')

const router = express.Router()

router.route('/').post(loginUser).get(protect, getUser)

module.exports = router
