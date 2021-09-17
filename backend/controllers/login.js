const User = require('../models/UserModel')
const {OAuth2Client} = require('google-auth-library')
const {createToken} = require('../utils')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

exports.loginUser = async (req, res) => {
  try {
    const {tokenId} = req.body

    if (!tokenId) {
      return res.status(400).json('Token not found')
    }

    const {payload} = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    if (!payload) {
      return res.status(400).json('User not found')
    }

    let user = await User.findOne({email: payload.email})

    if (!user) {
      // if not user Create new User
      user = await User.create({
        name: payload.name,
        email: payload.email,
        avatar: payload.picture,
      })
      // Create token
      const token = createToken(user)
      // Set Cookie in browser
      res.cookie('token', token, {
        httpOnly: true,
      })
      return res.status(200).json({msg: 'Login Successfully', user})
    } else {
      const token = createToken(user)
      res.cookie('token', token, {
        httpOnly: true,
      })
      return res.status(200).json({msg: 'Login Successfully', user})
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.getUser = async (req, res) => {
  const user = await User.findById(req.user._id)
  return res.status(200).json({user})
}
