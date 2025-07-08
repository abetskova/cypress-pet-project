class CheckoutPage {
  // Selectors
  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  get completeHeader() {
    return cy.get(".complete-header");
  }

  get completeText() {
    return cy.get(".complete-text");
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  get backHomeButton() {
    return cy.get('[data-test="back-to-products"]');
  }

  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  get shoppingCartLink() {
    return cy.get(".shopping_cart_link");
  }

  // Actions
  addProductsToCart(count = 2) {
    // Add products to cart (assume we're on inventory page)
    for (let i = 0; i < count; i++) {
      this.addToCartButtons.eq(i).click();
    }
  }

  proceedToCheckout() {
    this.shoppingCartLink.click();
    this.checkoutButton.click();
  }

  fillShippingInformation(
    firstName = "John",
    lastName = "Doe",
    postalCode = "12345"
  ) {
    this.firstNameInput.clear().type(firstName);
    this.lastNameInput.clear().type(lastName);
    this.postalCodeInput.clear().type(postalCode);
    this.continueButton.click();
  }

  completeOrder() {
    this.finishButton.click();
  }

  leaveRequiredFieldsEmpty() {
    // Leave all fields empty and try to continue
    this.continueButton.click();
  }

  // Verifications
  verifyOrderConfirmation() {
    cy.url().should("include", "/checkout-complete.html");
    this.completeHeader.should("be.visible");
  }

  verifyValidationErrors() {
    this.errorMessage.should("be.visible");
    this.errorMessage.should("contain", "Error:");
  }

  verifyOnCheckoutStepOne() {
    cy.url().should("include", "/checkout-step-one.html");
  }

  verifyOnCheckoutStepTwo() {
    cy.url().should("include", "/checkout-step-two.html");
  }
}

export default new CheckoutPage();
