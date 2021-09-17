const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country
