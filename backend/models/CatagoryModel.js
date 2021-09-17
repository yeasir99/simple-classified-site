const mongoose = require('mongoose')

const catagorySchema = mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  routeLink: {
    type: String,
    required: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Section',
  },
})

const Catagory = mongoose.model('catagory', catagorySchema)

module.exports = Catagory
