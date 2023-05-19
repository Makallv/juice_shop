import BasePage from "./Base.page";

class RegistrationPage extends BasePage{

    static get email(){
        return cy.get("#emailControl")
    }

    static get password(){
        return cy.get("#passwordControl")
    }

    static get repeatPassword(){
        return cy.get("#repeatPasswordControl")
    }

    static get securityQuestionComboBox(){
        return cy.get("#mat-select-2[role='combobox']")
    }

    static get securityQuestionComboBoxOptions(){
        return cy.get(".mat-option-text")
    }

    static get securityAnswer(){
        return cy.get("#securityAnswerControl")
    }

    static get registerButton(){
        return cy.get("#registerButton")
    }

}

export default RegistrationPage;