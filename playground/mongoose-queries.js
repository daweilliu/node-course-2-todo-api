const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5a39377e62beaf1ec40e0f8d';

// if(!ObjectID.isValid('6a41348004c247605c22d91e')) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found')
    }
    console.log('User By Id',user);
}).catch((e) => console.log(e));