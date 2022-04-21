const { expect } = require('@jest/globals');
const Item = require('./Item')
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true, useUnifiedTopology: true })



// Test création d'un item
test('Should Create an item', async () => {
    const item = await Item.create({
      name: 'test'
    })
    // Trouver l'item
    jest.spyOn(Item, 'findOne').mockReturnValue(Promise.resolve({ name: "test" }))  
})

// Test de la suppression d'un item
test('Should Delete an item', async () => {
  const item = await Item.create({
    name: 'test'
  })

  jest.spyOn(Item, 'findOneAndDelete').mockReturnValue(Promise.resolve({ name: "test" }))
})

// Test de la mise à jour d'un item
test('Should Update an item', async () => {
  const item = await Item.create({
    name: 'test'
  })

  jest.spyOn(Item, 'findOneAndUpdate').mockReturnValue(Promise.resolve({ name: "test" }))
})

// Test de connection à la base de données
test('Should Connect', async () => {
  mongoose.connection.close()
})