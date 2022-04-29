const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false
  },
});

module.exports = ToDo = mongoose.model('todo', ToDoSchema)


