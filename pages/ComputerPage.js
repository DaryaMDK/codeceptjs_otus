const { I } = inject();

class ComputerPage {
    constructor() {
        this.computerNameField = '#name';
        this.introducedDateField = '#introduced';
        this.discontinuedDateField = '#discontinued';
        this.companyField = 'select[name="company"]';
        this.saveButton = 'input[type="submit"]';
        this.deleteButton = 'input[value="Delete this computer"]';
    }

    async editComputer(newName) {
        I.fillField(this.computerNameField, newName);
        I.click(this.saveButton);
    }

    async choiseComputer() {
        I.click("//a[normalize-space()='ACE']");
    }

    async deleteComputer() {
        I.click(this.deleteButton);
    }
}

module.exports = new ComputerPage();
