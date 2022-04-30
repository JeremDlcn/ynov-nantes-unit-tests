const URL = `http://localhost:5000/`;

Feature('End to end test');

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

//TODO: make the second test about a done todo


