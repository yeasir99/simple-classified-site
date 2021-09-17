const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    images: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    section: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    location: {
      cityId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City',
      },
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
    },
  },
  {
    timestamps: true,
  },
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
