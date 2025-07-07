import { Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/loginPage.js";

Given("I am logged in as a standard user", () => {
  loginPage.visit();
  loginPage.login("standard_user", "secret_sauce");
  loginPage.clickLogin();
  cy.url().should("include", "/inventory.html");
});
