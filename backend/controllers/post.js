const Post = require('../models/PostModel')
const {processImage} = require('../utils')

exports.getPostsByCatagory = async (req, res) => {
  try {
    const posts = await Post.find({'location.routeLink': req.params.city})
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json({msg: 'Server Error'})
  }
}

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json({msg: 'Server Error'})
  }
}

exports.getPostsByUser = async (req, res) => {
  try {
    const data = await Post.find({user: req.user._id})
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({msg: 'Server Error'})
  }
}

exports.createNewPost = async (req, res) => {
  try {
    const {
      postCity,
      postCatagory,
      formData: {title, description, email, age, phoneNumber, images},
    } = req.body

    // create postData object based on post model
    const postData = {
      user: req.user._id,
      title,
      description,
      age,
    }
    if (phoneNumber) {
      postData.phoneNumber = phoneNumber
    }
    if (email) {
      postData.email = email
    }

    if (images.length > 0) {
      const imageFile64 = processImage(images)
      let resolveImageData = await Promise.all(imageFile64)
      postData.images = resolveImageData
    }
    postData.section = postCatagory.sectionName

    postData.catagory = postCatagory.routeLink

    const {_id, ...rest} = postCity

    postData.location = {
      cityId: _id,
      ...rest,
    }

    const data = await Post.create(postData)

    res.status(200).json({
      msg: 'post done',
      data,
    })
  } catch (error) {
    return res.status(500).json({msg: 'Server Error'})
  }
}
