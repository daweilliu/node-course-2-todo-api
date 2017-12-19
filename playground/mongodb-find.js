const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');


    // db.collection('Todos').find({
    //     _id: new ObjectID('5a37d3a819e851389445843a')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if (err) {
    //         return console.log('Unable to fetch todos', err);
    //     }
    // });

    db.collection('Todos').find().count().then((count) => {
       
        console.log(`Todos count: ${count}`);
    }, (err) => {
        if (err) {
            return console.log('Unable to count todos', err);
        }
    });
   

    // client.close();
});
