import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/loginPage.js";
import navigationPage from "../../support/pages/navigationPage.js";

Given("I am logged in as a standard user", () => {
  loginPage.visit();
  loginPage.login("standard_user", "secret_sauce");
  loginPage.clickLogin();
  cy.url().should("include", "/inventory.html");
});

When("I click on the menu", () => {
  navigationPage.openBurgerMenu();
});

When("I click {string}", (linkText) => {
  navigationPage.clickMenuLink(linkText);
});

Then("I should be redirected to login page", () => {
  navigationPage.verifyRedirectToLoginPage();
});

When("I open the burger menu", () => {
  navigationPage.openBurgerMenu();
});

Then("I should see all menu options", () => {
  navigationPage.verifyAllMenuOptions();
});

Then("all links should be functional", () => {
  navigationPage.verifyMenuLinksAreFunctional();
});

When("I scroll to footer", () => {
  navigationPage.scrollToFooter();
});

Then("I should see social media links", () => {
  navigationPage.verifySocialMediaLinks();
});

Then("links should open in new tabs", () => {
  navigationPage.verifySocialLinksOpenInNewTabs();
});
