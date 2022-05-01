const URL = `http://localhost:5000/`;

Feature('End to end test');

Scenario('test if the todo is done', async ({ I }) => {
    I.amOnPage(URL);
    I.wait(1);
    I.waitForElement('#todo-body');

    const text = I.grabTextFrom('#todo-body tr:last-of-type td');
    I.click('#todo-body tr:last-of-type .btn');

    I.waitForText(text, '#done-body');
});

Scenario('test if the todo is saved', async ({ I }) => {
    const testText = 'nouveau test';
    I.amOnPage(URL);

    I.waitForElement('#newTODO');
    I.fillField('#newTODO', testText);
    I.click('#create-todo');
    
    I.wait(2);
    I.waitForElement('#todo-body');

    I.see(testText, '#todo-body tr:last-of-type td');
});
