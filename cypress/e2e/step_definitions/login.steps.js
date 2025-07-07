import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/loginPage.js";

Given("I am on the login page", () => {
  loginPage.visit();
  loginPage.verifyLoginPageDisplayed();
});

When("I enter valid credentials", () => {
  loginPage.login("standard_user", "secret_sauce");
});

When("I click the login button", () => {
  loginPage.clickLogin();
});

Then("I should be redirected to the products page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain", "Products");
});

Then("I should see the products list", () => {
  cy.get(".inventory_list").should("be.visible");
  cy.get(".inventory_item").should("have.length.greaterThan", 0);
});
