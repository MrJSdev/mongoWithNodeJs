const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Database is not connecting')
  }
  console.log('successfully connected')
  const db = client.db('TodoApp')
  db.collection('Product').find().count().then((count) => {
    console.log('Totall Products: ', count)
  }, (errr) => {
    console.log('unable to fetch the data....', err)
  })
  // db.collection('Todos').find({_id: new ObjectID('5c0acbd901be8e45b85b4942')}).toArray().then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2))
  // }, (err) => {
  //   return console.log('couldnt fetch the data')
  // })
  // db.collection('Todos').insertMany([
  //   {
  //     name: 'Arbaaz Khan',
  //     age: 29,
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Asif Ansari',
  //     age: 25,
  //     status: 'active'
  //   },
  //   {
  //     name: 'Salim Pochi',
  //     age: 34,
  //     status: 'active'
  //   },
  //   {
  //     name: 'Arhan Khan',
  //     age: 56,
  //     status: 'inactive'
  //   }
  // ], (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add the data', err)
  //   }
  // db.collection('Product').insertOne({
  //   name: 'Abhay Shake',
  //   age: 12,
  //   location: 'chembur'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('failed to add data', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  client.close()
})
