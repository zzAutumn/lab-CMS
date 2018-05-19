'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
    max: 32
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)
