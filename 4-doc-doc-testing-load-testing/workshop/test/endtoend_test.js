const URL = `http://localhost:5000/`;

Feature('End to end test');

Scenario('test if the todo is done', async ({ I }) => {
    const testText = 'Tests & Documentations';
    I.amOnPage(URL);
    I.fillField('#newTODO', testText);
    I.click('#create-todo');
    
    I.see(testText, '#todo-body')
    I.click('#todo-body tr:last-of-type button')

    I.waitForText(testText, '#done-body')
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
