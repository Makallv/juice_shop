import BasePage from "./Base.page";

class SearchResultPage extends BasePage{

    static get url(){
        return '/#/search'
    }

    static get product(){
        return cy.get(".product")
    }

    static get header() {
        return cy.get('h1')
    }

    static get closeIcon(){
        return cy.get('[aria-label="Close Dialog"]')
    }

    static get reviewButton(){
        return cy.get('.mat-expansion-indicator')
    }

    static get review(){
        return cy.get('.review-text')
    }
}

export default SearchResultPage;