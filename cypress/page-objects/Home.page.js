import BasePage from './Base.page';

class HomePage extends BasePage{

    static get url(){
        return '/';
    }

    static get dismissButton(){
        return cy.get(".cc-dismiss")
    }

    static get closeButton(){
        return cy.get(".close-dialog")
    }

    static get accountButton(){
        return cy.get("#navbarAccount")
    }

    static get loginButton(){
        return cy.get("#navbarLoginButton")
    }

    static get searchIcon(){
        return cy.get("#searchQuery")
    }

    static get searchField(){
        return cy.get('.mat-input-element')
    }

    static get itemsPerPage(){
        return cy.get("mat-select[aria-label='Items per page:']")
    }

    static get itemsPerPageOptions(){
        return cy.get(".mat-option-text")
    }

}

export default HomePage;