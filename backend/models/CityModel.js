const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  routeLink: {
    type: String,
    required: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'State',
  },
  stateName: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Country',
  },
  countryName: {
    type: String,
    required: true,
  },
})

const City = mongoose.model('City', citySchema)

module.exports = City
