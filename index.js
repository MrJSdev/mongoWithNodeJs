const express = require('express')
const hbs = require('hbs')
const app = express()
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.render('404.hbs')
})
app.get('/', (req, res) => {
  res.send({
    name: 'Asif Ansari',
    age: 23,
    location: 'Mumbai',
    degree: 'B.A'
  });
})
app.use((req, res, next) => {
  console.log('consoling......')
  next()
})
app.get('/home', (req, res) => {
  res.send('Send me on home')
})
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Us Now',
    copyRight: 2019
  })
})
app.listen(4000)
