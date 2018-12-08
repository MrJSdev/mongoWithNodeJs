const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/PetApp', {useNewUrlParser: true})
module.exports = {mongoose}
