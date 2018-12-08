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
  }
})

module.exports = {Pet}
