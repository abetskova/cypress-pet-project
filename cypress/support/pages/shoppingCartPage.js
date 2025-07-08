class ShoppingCartPage {
  // Selectors
  get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }

  get cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  get cartItems() {
    return cy.get(".cart_item");
  }

  get cartItemNames() {
    return cy.get(".inventory_item_name");
  }

  get cartItemPrices() {
    return cy.get(".inventory_item_price");
  }

  get cartItemQuantities() {
    return cy.get(".cart_quantity");
  }

  get removeButtons() {
    return cy.get('[data-test^="remove"]');
  }

  get continueShoppingButton() {
    return cy.get('[data-test="continue-shopping"]');
  }

  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  get cartList() {
    return cy.get(".cart_list");
  }

  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  // Actions
  openCart() {
    this.shoppingCartLink.click();
  }

  addProductToCart() {
    // Add first available product to cart
    // cy.visit("/inventory.html");
    this.addToCartButtons.first().click();
  }

  addMultipleProductsToCart(count = 2) {
    for (let i = 0; i < count; i++) {
      this.addToCartButtons.eq(i).click();
    }
  }

  removeFirstProduct() {
    this.removeButtons.first().click();
  }

  removeProductByName(productName) {
    this.cartItems.contains(productName).within(() => {
      cy.get('[data-test^="remove"]').click();
    });
  }

  clickContinueShopping() {
    this.continueShoppingButton.click();
  }

  proceedToCheckout() {
    this.checkoutButton.click();
  }

  // Verifications
  verifyCartIsOpen() {
    cy.url().should("include", "/cart.html");
    this.cartList.should("be.visible");
  }

  verifyAllAddedProducts() {
    this.cartItems.should("have.length.greaterThan", 0);
    this.cartItemNames.should("be.visible");
  }

  verifyCorrectQuantitiesAndPrices() {
    // Verify each cart item has quantity and price
    this.cartItems.each(($item) => {
      cy.wrap($item).within(() => {
        cy.get(".cart_quantity").should("be.visible").and("contain", "1");
        cy.get(".inventory_item_price")
          .should("be.visible")
          .and("contain", "$");
      });
    });
  }

  verifyProductRemoved(initialCount) {
    // Verify cart has one less item
    if (initialCount > 1) {
      this.cartItems.should("have.length", initialCount - 1);
    } else {
      // If it was the last item, cart should be empty
      this.cartItems.should("not.exist");
    }
  }

  verifyCartCountDecreased(expectedCount) {
    if (expectedCount > 0) {
      this.cartBadge.should("contain", expectedCount.toString());
    } else {
      this.cartBadge.should("not.exist");
    }
  }

  verifyReturnToProductsPage() {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  }

  getCartItemCount() {
    return this.cartItems.its("length");
  }

  getCurrentCartBadgeCount() {
    return this.cartBadge.invoke("text").then(parseInt);
  }
}

export default new ShoppingCartPage();
