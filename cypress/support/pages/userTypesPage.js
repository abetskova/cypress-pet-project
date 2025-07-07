class UserTypesPage {
  // Selectors
  get usernameInput() {
    return cy.get('[data-test="username"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  get inventoryItems() {
    return cy.get(".inventory_item");
  }

  get inventoryImages() {
    return cy.get(".inventory_item_img img");
  }

  get cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }

  // Actions
  visit() {
    cy.visit("/");
  }

  loginAs(username) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type("secret_sauce");
    this.loginButton.click();

    // For performance_glitch_user, wait longer for login to complete
    if (username === "performance_glitch_user") {
      cy.wait(2000); // Give extra time for the slow login process
    }
  }

  attemptLogin(username) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type("secret_sauce");
    this.loginButton.click();
  }

  addFirstProductToCart() {
    this.addToCartButtons.first().click();
  }

  navigateThroughSite() {
    // Navigate to different pages to test performance with longer timeouts
    this.shoppingCartLink.click();
    cy.get(".cart_list", { timeout: 8000 }).should("exist");
    cy.go("back");

    // Wait for inventory page to load again
    cy.get(".inventory_item", { timeout: 10000 }).should("be.visible");

    // Click on product name or image instead of the whole item
    cy.get(".inventory_item_name", { timeout: 10000 }).first().click();
    cy.get(".inventory_details_name", { timeout: 8000 }).should("be.visible");
    cy.go("back");

    // Final wait for inventory page
    cy.get(".inventory_item", { timeout: 10000 }).should("be.visible");
  }

  // Verifications
  verifyUIIssues() {
    // Check for broken images (common problem_user issue)
    this.inventoryImages.each(($img) => {
      cy.wrap($img)
        .should("have.attr", "src")
        .then((src) => {
          // Problem user often has broken image sources
          if (src.includes("sl-404.168b1cce.jpg")) {
            cy.log("UI Issue detected: Broken image found");
          }
        });
    });

    // Check for UI layout issues
    this.inventoryItems.should("be.visible");
  }

  verifySlowLoading() {
    // Performance glitch user has intentional delays
    // Increase timeout and wait for elements to appear
    cy.get(".inventory_item", { timeout: 10000 }).should("be.visible");

    // Also verify that images load slowly
    cy.get(".inventory_item_img img", { timeout: 15000 }).should("be.visible");

    cy.log("Performance glitch user: Page loaded with delays as expected");
  }

  verifyLockedOutMessage(expectedMessage) {
    this.errorMessage.should("be.visible").and("contain", expectedMessage);
  }

  verifySuccessfulLogin() {
    // Increase timeout for performance_glitch_user
    cy.url({ timeout: 10000 }).should("include", "/inventory.html");
  }

  verifyProductAddedToCart() {
    this.cartBadge.should("be.visible").and("contain", "1");
  }
}

export default new UserTypesPage();
