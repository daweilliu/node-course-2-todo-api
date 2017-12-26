const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5a41a4a2d980da5f902bcb9a').then((todo) =>{
    console.log(todo);
});