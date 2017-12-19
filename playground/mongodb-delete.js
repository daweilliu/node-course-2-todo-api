const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany

    // deleteOne

    //findOneAndDelete

    var db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Walking the dog'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err) {
    //         return console.log('Unable to count todos', err);
    //     }
    // });

    // db.collection('Todos').deleteOne({text: 'Walking the dog'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err) {
    //         return console.log('Unable to count todos', err);
    //     }
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }, (err) => {
        if (err) {
            return console.log('Unable to count todos', err);
        }
    });
   

    // client.close();
});
