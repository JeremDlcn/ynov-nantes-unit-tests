Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', async ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');
    I.click('.cta');
    I.waitForElement('.searchfield');
    I.fillField('.searchfield', 'info');
    const value = await I.grabTextFrom('.preview-title .tile-title');
    I.see('Bachelor Informatique', '.preview-title .tile-title');
});
