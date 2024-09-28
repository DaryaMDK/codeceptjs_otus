const { I } = inject();

class AddComputerPage {
    constructor() {
        this.computerNameField = '#name';
        this.introducedDateField = '#introduced';
        this.discontinuedDateField = '#discontinued';
        this.companyField = 'select[name="company"]';
        this.createButton = 'input[value="Create this computer"]';
    }

    async addNewComputer(name, introduced, discontinued, company) {
        I.fillField(this.computerNameField, name);
        I.fillField(this.introducedDateField, introduced);
        I.fillField(this.discontinuedDateField, discontinued);
        I.selectOption(this.companyField, company);
        I.click(this.createButton);
    }
}

module.exports = new AddComputerPage();
