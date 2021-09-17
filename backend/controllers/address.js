const Country = require('../models/CountryModel')
const State = require('../models/StateModel')
const City = require('../models/CityModel')
exports.address = async (req, res) => {
  try {
    const countries = await Country.find({})
    const states = await State.find({})
    const cities = await City.find({})
    res.status(200).json({
      countries,
      states,
      cities,
    })
  } catch (error) {
    res.status(400).json(error)
  }
}
