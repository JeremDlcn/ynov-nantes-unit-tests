const { expect } = require('@jest/globals');
const ToDo = require('../toDoItem');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/toDoApp', { useNewUrlParser: true, useUnifiedTopology: true })



// Test création d'un item
test('Should Create an item', async() => {
    const todo = await ToDo.create({
            text: 'Test Integration',
            done: false
        })
        // Trouver l'item
    jest.spyOn(todo, 'findOne').mockReturnValue(Promise.resolve({ text: "Test Integration", done: false }))
})


// Test de la mise à jour d'un item
test('Should Update an item', async() => {
    const item = await Item.create({
        text: 'Test Integration',
        done: false
    })


    jest.spyOn(item, 'findOneAndUpdate').mockReturnValue(Promise.resolve({ text: "Test Integratio", done: false }))
})