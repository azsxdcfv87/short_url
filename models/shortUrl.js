const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortUrlSchema = new Schema({
  origin_URL: {
    type: String,
    required: true
  },
  short_URL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
