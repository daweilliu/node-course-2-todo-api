const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a386cc4c580ed06241b093b')
    // },{
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err) {
    //         return console.log('Unable to update todos', err);
    //     }
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a37d5edb16a541a8cceaa3e')
    },{
        $set: {
            name: 'Andrew',
        },
        $inc: { 
            "age": 1 
        } 

    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        if (err) {
            return console.log('Unable to update user', err);
        }
    });
    // client.close();
});
