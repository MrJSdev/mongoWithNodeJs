const express = require('express')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {Pet} = require('./models/Pet')
const port = 3000
const app = express()
app.use(bodyParser.json())
app.post('/pet', (req, res) => {
  const newPet = new Pet({
    petType: req.body.petType,
    size: req.body.size,
    color: req.body.color,
    availability: req.body.availability
  })
  console.log(newPet)
  newPet.save().then((result) => {
    res.send(result)
  }, (err) => {
    res.status(400).send(err)
  })
})
app.listen(port, () => console.log(`Server is started on port: ${port}!`))

