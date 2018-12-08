const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Database is not connecting')
  }
  console.log('successfully connected')
  const db = client.db('TodoApp')
  db.collection('Todos').findOneAndDelete({_id: ObjectID('5c0acbd901be8e45b85b4943')}).then((result) => {
    console.log(result)
  })

  client.close()
})
