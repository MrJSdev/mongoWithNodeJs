const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Database is not connecting')
  }
  console.log('successfully connected')
  const db = client.db('TodoApp')
  db.collection('Todos').findOneAndUpdate({name: 'Salim Pochi'}, { $inc: {
      age: 34
    }}, {returnOriginal: false}).then((result) => {
      console.log(result)
  })

  client.close()
})
