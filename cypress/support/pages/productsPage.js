class ProductsPage {
  // Selectors
  get inventoryItems() {
    return cy.get(".inventory_item");
  }

  get inventoryItemNames() {
    return cy.get(".inventory_item_name");
  }

  get inventoryItemImages() {
    return cy.get(".inventory_item_img");
  }

  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  get cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }

  get sortDropdown() {
    return cy.get(".product_sort_container");
  }

  get inventoryItemPrices() {
    return cy.get(".inventory_item_price");
  }

  // Product details page selectors
  get productDetailsName() {
    return cy.get(".inventory_details_name");
  }

  get productDetailsDescription() {
    return cy.get(".inventory_details_desc");
  }

  get productDetailsPrice() {
    return cy.get(".inventory_details_price");
  }

  get backToProductsButton() {
    return cy.get('[data-test="back-to-products"]');
  }

  // Cart page selectors
  get cartItems() {
    return cy.get(".cart_item");
  }

  get cartItemNames() {
    return cy.get(".inventory_item_name");
  }

  // Actions
  clickOnFirstProduct() {
    this.inventoryItemNames.first().click();
  }

  addFirstProductToCart() {
    this.addToCartButtons.first().click();
  }

  sortProductsBy(sortOption) {
    this.sortDropdown.select(sortOption);
  }

  openCart() {
    this.shoppingCartLink.click();
  }

  // Verifications
  verifyProductDetailsPage() {
    this.productDetailsName.should("be.visible");
    this.productDetailsDescription.should("be.visible");
    this.productDetailsPrice.should("be.visible");
  }

  verifyProductDetails() {
    this.productDetailsName.should("contain.text", "Sauce Labs");
    this.productDetailsDescription.should("not.be.empty");
    this.productDetailsPrice.should("contain", "$");
  }

  verifyCartBadgeCount(expectedCount) {
    this.cartBadge.should("be.visible").and("contain", expectedCount);
  }

  verifyProductInCart() {
    this.cartItems.should("have.length.greaterThan", 0);
    this.cartItemNames.should("be.visible");
  }

  verifySortedByPriceAscending() {
    let prices = [];

    this.inventoryItemPrices
      .each(($price) => {
        const priceText = $price.text().replace("$", "");
        const priceNumber = parseFloat(priceText);
        prices.push(priceNumber);
      })
      .then(() => {
        // Verify prices are in ascending order
        for (let i = 0; i < prices.length - 1; i++) {
          expect(prices[i]).to.be.lte(prices[i + 1]);
        }
        cy.log("Products are sorted by price in ascending order");
      });
  }
}

export default new ProductsPage();
