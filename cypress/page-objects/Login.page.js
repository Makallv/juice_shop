import BasePage from "./Base.page";

class LoginPage extends BasePage{

    static get newCustomerButton(){
        return cy.get("#newCustomerLink")
    }

    static get username(){
        return cy.get("#email")
    }

    static get password(){
        return cy.get("#password")
    }

    static get loginButton(){
        return cy.get("#loginButton")
    }
}

export default LoginPage;