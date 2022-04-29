const { expect } = require('@jest/globals');
const ToDo = require('../toDoModel');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ynovtest:ynovtest@cluster0.jdgyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })



// Test création d'un item
test('Should Create an item', async() => {
    const todo = await ToDo.create({
            text: 'Test Integration',
            done: false
        })
        // Trouver l'item
    jest.spyOn(ToDo, 'findOne').mockReturnValue(Promise.resolve({ text: "Test Integration", done: false }))
})


// Test de la mise à jour d'un item
test('Should Update an item', async() => {
    const item = await ToDo.create({
        text: 'Test Integration',
        done: false
    })

    jest.spyOn(ToDo, 'findOneAndUpdate').mockReturnValue(Promise.resolve({ text: "Test Integratio", done: false }))
})