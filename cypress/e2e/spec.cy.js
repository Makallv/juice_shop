import HomePage from "../page-objects/Home.page";
import LoginPage from "../page-objects/Login.page";
import RegistrationPage from "../page-objects/Registatrion.page";
import SearchResultPage from "../page-objects/SearchResult.page";
import {data} from "../support/data";

describe("Juice-Shop scenarios", () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.closeButton.click();
    });
    it("Registration", () => {
        HomePage.accountButton.click();
        HomePage.loginButton.click();
        LoginPage.newCustomerButton.click();
        RegistrationPage.email.type(data.UserData.email);
        RegistrationPage.password.type(data.UserData.password);
        RegistrationPage.repeatPassword.type(data.UserData.password);
        RegistrationPage.securityQuestionComboBox.click();
        RegistrationPage.securityQuestionComboBoxOptions
            .contains("Your eldest siblings middle name?")
            .click()
        cy.get("#securityAnswerControl").type(data.UserData.word);
        cy.get("#registerButton").click();
    });
  });
  context("With login", () => {
      beforeEach(() => {
          HomePage.visit();
          HomePage.dismissButton.click();
          HomePage.closeButton.click();
      });
        it("Login", () => {
            HomePage.accountButton.click();
            HomePage.loginButton.click();
            LoginPage.username.type("demo");
            LoginPage.password.type("demo");
            LoginPage.loginButton.click();
        });

        it("Search", () => {
            HomePage.searchIcon.click();
            HomePage.searchField.type("Lemon{enter}");
            SearchResultPage.product.contains("Lemon Juice").click();
            SearchResultPage.header.should("have.text", "Lemon Juice (500ml)");
        });

        it("Search for 500ml", () => {
            HomePage.searchIcon.click();
            HomePage.searchField.type("500ml{enter}");
            SearchResultPage.product.contains("Lemon Juice").click();
            SearchResultPage.header.should("have.text", "Lemon Juice (500ml)");
            SearchResultPage.closeIcon.click();
            SearchResultPage.product.contains('Eggfruit Juice').click();
            SearchResultPage.header.should("have.text", "Eggfruit Juice (500ml)");
            SearchResultPage.closeIcon.click();
            SearchResultPage.product.contains('Strawberry Juice').click();
            SearchResultPage.header.should("have.text", "Strawberry Juice (500ml)");
            SearchResultPage.closeIcon.click();
        });

        it('Items pre page', () => {
            HomePage.itemsPerPage.scrollIntoView().click();
            HomePage.itemsPerPageOptions.contains('12').click();
            SearchResultPage.product.should('have.length', 12);

            HomePage.itemsPerPage.click();
            HomePage.itemsPerPageOptions.contains('24').click();
            SearchResultPage.product.should('have.length', 24);

            HomePage.itemsPerPage.click();
            HomePage.itemsPerPageOptions.contains('36').click();
            SearchResultPage.product.should('have.length', 35);
        });

        it("Validate item review", () => {

            HomePage.searchIcon.click();
            HomePage.searchField.type("King{enter}");
            SearchResultPage.product.contains("King").click();
            cy.wait(200);
            SearchResultPage.reviewButton.click();
            SearchResultPage.review.should("contain.text",
                "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
        });
  });
});