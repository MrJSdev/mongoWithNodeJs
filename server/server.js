const express = require('express')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {Pet} = require('./models/Pet')
const port = 8081
const app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
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
app.get('/pet', (req, res) => {
  Pet.find().then((pets) => {
    res.send({pets})
  })
})

app.get('/pet/:id', (req, res) => {
  console.log(req.params.id)
  Pet.findOneAndDelete({_id: req.params.id}).then((pet) => {
    res.send({pet})
  })
})
app.listen(port, () => console.log(`Server is started on port: ${port}!`))

