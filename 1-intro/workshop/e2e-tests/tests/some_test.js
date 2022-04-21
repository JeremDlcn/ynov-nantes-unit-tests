Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', async ({ I }) => {
    // Aller sur la page d'Ynov
    I.amOnPage('https://www.ynov-nantes.com/');
    // Cliquer sur la barre de recherche
    I.click('.cta');
    // Attendre que l'élément s'affiche sur la page
    I.waitForElement('.searchfield');
    // Taper "info" dans la barre de recherche
    I.fillField('.searchfield', 'info');
    // Trouver "Bachelor Informatique" dans l'élément
    const value = await I.grabTextFrom('.preview-title .tile-title');
    I.see('Bachelor Informatique', '.preview-title .tile-title');
});
