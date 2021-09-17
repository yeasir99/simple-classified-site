const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    default: 0,
  },
  userType: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
