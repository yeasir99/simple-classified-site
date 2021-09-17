const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Country',
  },
})

const State = mongoose.model('State', stateSchema)

module.exports = State
