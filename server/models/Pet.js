const mongoose = require('mongoose')
const Pet = mongoose.model('Pet', {
  petType: {
    type: String
  },
  availability: {
    type: Boolean
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  updatedAt: {
    type: Number
  }
})

module.exports = {Pet}
