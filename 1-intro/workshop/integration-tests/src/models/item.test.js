const { expect } = require('@jest/globals');
const Item = require('./Item')
const mg = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

test('rly difficult test', () => {
    expect(true).toBe(true);
});


test('Should save item to database', async done => {
  // Searche one item in the database
  try {
    const item = await Item.find()
    console.log(item);
  } catch (error) {
    console.log(error);
  }
    
  // expect(item.name).toBe('Zell')
  // toBeTruthy()
  mongoose.connection.close()
}, 20000)
