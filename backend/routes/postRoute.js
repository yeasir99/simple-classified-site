const express = require('express')
const {
  getPostsByCatagory,
  getPostsByUser,
  createNewPost,
  getPostById,
} = require('../controllers/post')
const protect = require('../middleware/protect')
let multer = require('multer')
let upload = multer()

const router = express.Router()

router.route('/section/:city/:catagory').get(getPostsByCatagory)
router.route('/:id').get(getPostById)
router.route('/').get(protect, getPostsByUser)
router.route('/create-new').post(protect, upload.fields([]), createNewPost)

module.exports = router
