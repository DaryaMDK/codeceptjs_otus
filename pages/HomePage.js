const { I } = inject();

class HomePage {
    constructor() {
        this.searchBox = '#searchbox';
        this.searchButton = '#searchsubmit';
        this.addNewComputerButton = '#add';
    }

    async searchComputer(name) {
        I.fillField(this.searchBox, name);
        I.doubleClick(this.searchButton);
    }

    async clickAddNewComputer() {
        I.click(this.addNewComputerButton);
    }
}

module.exports = new HomePage();
