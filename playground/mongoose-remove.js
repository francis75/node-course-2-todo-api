const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({})
Todo.findOneAndRemove({_id: '5b72275d43978cf973e98065'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5b72275d43978cf973e98065').then((todo) => {
    console.log(todo);
});