const jwt = require('jsonwebtoken')
require('dotenv').config()
cloudinary = require('cloudinary').v2
const imageDataURI = require('image-data-uri')

const DatauriParser = require('datauri/parser')
const path = require('path')
const parser = new DatauriParser()

// dUri.format('.png', buffer);
const dataUri = file =>
  parser.format(path.extname(file.originalname).toString(), file.buffer)

const createToken = user => {
  return jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '12h',
  })
}

const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET)

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
})

const processImage = images => {
  const imageFile64 = images.map(async item => {
    let Imgdata = imageDataURI.decode(item)
    let ImageName = Imgdata.imageType.split(';')[1].split('=')[1]
    const file = {
      originalname: ImageName,
      buffer: Imgdata.dataBuffer,
    }
    const file64 = dataUri(file)
    const {public_id, url} = await cloudinary.uploader.upload(file64.content)
    return {public_id, url}
  })
  return imageFile64
}

module.exports = {
  createToken,
  verifyToken,
  processImage,
}
