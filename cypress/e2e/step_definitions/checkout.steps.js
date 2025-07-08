import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../../support/pages/checkoutPage.js";

Given("I have products in cart", () => {
  checkoutPage.addProductsToCart(2);
});

When("I proceed to checkout", () => {
  checkoutPage.proceedToCheckout();
});

When("I fill in shipping information", () => {
  checkoutPage.fillShippingInformation();
});

When("I complete the order", () => {
  checkoutPage.completeOrder();
});

When("I leave required fields empty", () => {
  checkoutPage.leaveRequiredFieldsEmpty();
});

Then("I should see order confirmation", () => {
  checkoutPage.verifyOrderConfirmation();
});

Then("I should see validation errors", () => {
  checkoutPage.verifyValidationErrors();
});
