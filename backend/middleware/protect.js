const User = require('../models/UserModel')
const {verifyToken} = require('../utils')

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({msg: 'Authentication Fail'})
    }
    const decoded = verifyToken(token)
    req.user = await User.findById(decoded.id)
    next()
  } catch (error) {
    return res.status(500).json({msg: 'Server Error'})
  }
}

module.exports = protect
