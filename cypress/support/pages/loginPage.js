class LoginPage {
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

  // Actions
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    this.usernameInput.clear().type(username);
  }

  enterPassword(password) {
    this.passwordInput.clear().type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
  }

  // Verifications
  verifyErrorMessage(message) {
    this.errorMessage.should("contain", message);
  }

  verifyLoginPageDisplayed() {
    this.usernameInput.should("be.visible");
    this.passwordInput.should("be.visible");
    this.loginButton.should("be.visible");
  }
}

export default new LoginPage();
