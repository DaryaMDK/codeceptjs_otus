const { I } = inject();

Feature('Computer Database');

Scenario('Search for a computer', ({ homePage }) => {
    I.amOnPage('/');
    homePage.searchComputer('ACE');
    I.see('ACE');
});

Scenario('Add a new computer', async ({ addComputerPage }) => {
    I.amOnPage('/new');
    await addComputerPage.addNewComputer('New Computer', '2024-01-01', '2025-01-01', 'Apple Inc.');
    I.waitInUrl('/')
});

Scenario('Edit an existing computer', async ({ homePage, computerPage }) => {
    I.amOnPage('/');
    homePage.searchComputer('ACE');
    await computerPage.choiseComputer();
    await computerPage.editComputer('ACE Updated');
    I.see('Done! Computer ACE Updated has been updated');
});

Scenario('Delete a computer', async ({ homePage, computerPage }) => {
    I.amOnPage('/543');
    await computerPage.deleteComputer();
    I.waitForText('Done! Computer has been deleted');
});

Scenario('Navigate to next page', () => {
    I.amOnPage('/');
    I.click('Next →');
    I.seeInCurrentUrl('p=1');
});