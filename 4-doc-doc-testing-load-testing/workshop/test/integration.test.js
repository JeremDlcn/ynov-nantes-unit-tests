const { expect } = require('@jest/globals');
const ToDo = require('../toDoModel');
const mongoose = require('mongoose');
const mockingoose = require('mockingoose');


mongoose.connect('mongodb+srv://ynovtest:ynovtest@cluster0.jdgyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })



// Test création d'un item
test('Should find by id', () => {
    const todo = {
        done: false,
        _id: "626d367b866bfe2cd853c87b",
        text: 'Test Integration',
        __v: 0
      }

    mockingoose(ToDo).toReturn(todo, 'findOne');

    return ToDo.findById(todo._id).then(result => {
        expect(result.text).toBe(todo.text);
        expect(result.done).toBe(todo.done);
    })
})


// Test de la mise à jour d'un item
test('Should create an item', async() => {
    const todo = {
        done: false,
        text: 'Nouvelle Tâche',
      }

    mockingoose(ToDo).toReturn(todo, 'save');


    return ToDo.create(todo).then(result => {
        expect(result.text).toBe(todo.text);
        expect(result.done).toBe(todo.done);
    })
})