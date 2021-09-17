const Catagory = require('../models/CatagoryModel')
const Section = require('../models/SectionModel')

exports.getCatagoryData = async (req, res) => {
  try {
    const catagory = await Catagory.find({})
    const section = await Section.find({})
    return res.status(200).json({catagory, section})
  } catch (error) {
    return res.status(500).json({msg: 'Internal Server Error', error})
  }
}
