const express = require('express')
const _ = require('lodash')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {Pet} = require('./models/Pet')
const port = 8081
const app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH, OPTIONS')
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
  Pet.findById(req.params.id).then((pet) => {
    res.send({pet})
  })
})
app.get('/pet/delete/:id', (req, res) => {
  console.log(req.params.id)
  Pet.findOneAndDelete({_id: req.params.id}).then((pet) => {
    res.send({pet})
  })
})
app.patch('/pet/:id', (req, res) => {
  const body = _.pick(req.body, ['color', 'size', 'petType'])
  console.log(body)
  body.updatedAt = new Date().getTime()

  Pet.findOneAndUpdate({_id: req.params.id}, {
    $set: body
  }, {new: true}).then((result) => {
    res.status(200).send(result)
  })
})
// app.delete('/pet/all/delete', (req, res) => {
//   console.log(req)
//   res.send(req)
//   Pet.findOneAndDelete({_id: req.body.}).then((pet) => {
//     res.send({pet})
//   })
// })
app.listen(port, () => console.log(`Server is started on port: ${port}!`))

