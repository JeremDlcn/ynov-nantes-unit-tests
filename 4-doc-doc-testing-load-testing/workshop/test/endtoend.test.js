const CLIENT_URL = `localhost:5000`;
const puppeteer = require('puppeteer');

test('End to End Test', async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`http://${CLIENT_URL}`);

    await page.type('#newTODO', 'nouveau test', { delay: 20 })
    await page.click('#create-todo');

    await page.waitForTimeout(500)
    await page.waitForSelector('#todo-body');

    //get a todo item name the same as the one we created
    const todoItem = await page.$eval('#todo-body tr:last-of-type td', el => el.innerText);



    await browser.close();
});

test('End to End Test', async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`http://${CLIENT_URL}`);


    await page.waitForTimeout(500)
    await page.waitForSelector('#todo-body');

    const todoItem = await page.$eval('#todo-body tr:first-of-type td', el => el.innerText);
    await page.click('#todo-body tr:first-of-type .btn');

    await page.waitForTimeout(500)
    const doneItem = await page.$$eval('#done-body tr', els => els.map(el => el.innerText));


    const isDone = doneItem.includes(todoItem);


    await browser.close();
});