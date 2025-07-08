import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userTypesPage from "../../support/pages/userTypesPage.js";

Given("I login as {string}", (username) => {
  userTypesPage.visit();
  userTypesPage.loginAs(username);

  // For performance_glitch_user, allow more time for login verification
  if (username === "performance_glitch_user") {
    cy.wait(3000);
  }

  userTypesPage.verifySuccessfulLogin();
});

Given("I try to login as {string}", (username) => {
  userTypesPage.visit();
  userTypesPage.attemptLogin(username);
});

When("I try to add products to cart", () => {
  // Wait for page to fully load before trying to add to cart
  cy.get(".inventory_item", { timeout: 10000 }).should("be.visible");
  userTypesPage.addFirstProductToCart();
});

When("I navigate through the site", () => {
  userTypesPage.navigateThroughSite();
});

Then("I should experience UI issues", () => {
  userTypesPage.verifyUIIssues();
});

Then("the site should load slowly", () => {
  userTypesPage.verifySlowLoading();
});
