import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/loginPage.js";
import productsPage from "../../support/pages/productsPage.js";

When("I click on a product", () => {
  productsPage.clickOnFirstProduct();
});

When("I add a product to cart", () => {
  productsPage.addFirstProductToCart();
});

When("I sort products by {string}", (sortOption) => {
  productsPage.sortProductsBy(sortOption);
});

Then("I should see product details page", () => {
  productsPage.verifyProductDetailsPage();
});

Then("I should see product name, description, and price", () => {
  productsPage.verifyProductDetails();
});

Then("the cart badge should show {string}", (expectedCount) => {
  productsPage.verifyCartBadgeCount(expectedCount);
});

Then("the product should be in the cart", () => {
  productsPage.openCart();
  productsPage.verifyProductInCart();
});

Then("products should be sorted by ascending price", () => {
  productsPage.verifySortedByPriceAscending();
});
