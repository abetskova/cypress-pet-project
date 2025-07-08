import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import shoppingCartPage from "../../support/pages/shoppingCartPage.js";

let initialCartCount = 0;
let initialBadgeCount = 0;

Given("I have added products to cart", () => {
  // Don't visit inventory directly, we're already logged in from previous step
  // Just add products to cart
  shoppingCartPage.addMultipleProductsToCart(2);

  // Store initial counts for later verification
  shoppingCartPage.openCart();
  shoppingCartPage.getCartItemCount().then((count) => {
    initialCartCount = count;
  });

  // Check if cart badge exists before getting count
  cy.get("body").then(($body) => {
    if ($body.find(".shopping_cart_badge").length > 0) {
      shoppingCartPage.getCurrentCartBadgeCount().then((count) => {
        initialBadgeCount = count;
      });
    } else {
      initialBadgeCount = 0;
    }
  });

  // Go back to products page using relative URL
  cy.go("back");
});

When("I open the cart", () => {
  shoppingCartPage.openCart();
});

When("I remove a product from cart", () => {
  shoppingCartPage.removeFirstProduct();
});

When("I click Continue Shopping", () => {
  shoppingCartPage.clickContinueShopping();
});

Then("I should see all added products", () => {
  shoppingCartPage.verifyCartIsOpen();
  shoppingCartPage.verifyAllAddedProducts();
});

Then("I should see correct quantities and prices", () => {
  shoppingCartPage.verifyCorrectQuantitiesAndPrices();
});

Then("the product should be removed", () => {
  shoppingCartPage.verifyProductRemoved(initialCartCount);
});

Then("cart count should decrease", () => {
  const expectedCount = initialBadgeCount - 1;
  shoppingCartPage.verifyCartCountDecreased(expectedCount);
});

Then("I should return to products page", () => {
  shoppingCartPage.verifyReturnToProductsPage();
});
