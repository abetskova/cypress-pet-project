class NavigationPage {
  // Selectors
  get burgerMenuButton() {
    return cy.get("#react-burger-menu-btn");
  }

  get burgerMenu() {
    return cy.get(".bm-menu");
  }

  get menuItemsList() {
    return cy.get(".bm-item-list");
  }

  get closeMenuButton() {
    return cy.get("#react-burger-cross-btn");
  }

  get footer() {
    return cy.get(".footer");
  }

  get socialSection() {
    return cy.get("ul.social");
  }

  get twitterLink() {
    return cy.get('[data-test="social-twitter"]');
  }

  get facebookLink() {
    return cy.get('[data-test="social-facebook"]');
  }

  get linkedinLink() {
    return cy.get('[data-test="social-linkedin"]');
  }

  // Actions
  openBurgerMenu() {
    this.burgerMenuButton.click();
    this.burgerMenu.should("be.visible");
  }

  closeBurgerMenu() {
    this.closeMenuButton.click();
  }

  clickMenuLink(linkText) {
    this.burgerMenu.should("be.visible");
    cy.contains(".bm-item", linkText).click();
  }

  scrollToFooter() {
    this.footer.scrollIntoView();
  }

  // Verifications
  verifyMenuIsOpen() {
    this.burgerMenu.should("be.visible");
  }

  verifyAllMenuOptions() {
    this.menuItemsList.within(() => {
      cy.contains("All Items").should("be.visible");
      cy.contains("About").should("be.visible");
      cy.contains("Logout").should("be.visible");
      cy.contains("Reset App State").should("be.visible");
    });
  }

  verifyMenuLinksAreFunctional() {
    // Test About link has href attribute
    cy.contains(".bm-item", "About").should("have.attr", "href");

    // Test All Items link functionality
    cy.contains(".bm-item", "All Items").click();
    cy.url().should("include", "/inventory.html");

    // Close menu for next test
    this.closeBurgerMenu();
  }

  verifySocialMediaLinks() {
    this.socialSection.should("be.visible");
    this.twitterLink.should("be.visible").and("contain", "Twitter");
    this.facebookLink.should("be.visible").and("contain", "Facebook");
    this.linkedinLink.should("be.visible").and("contain", "LinkedIn");
  }

  verifySocialLinksOpenInNewTabs() {
    this.twitterLink
      .should("have.attr", "href", "https://twitter.com/saucelabs")
      .and("have.attr", "target", "_blank");

    this.facebookLink
      .should("have.attr", "href", "https://www.facebook.com/saucelabs")
      .and("have.attr", "target", "_blank");

    this.linkedinLink
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/sauce-labs/"
      )
      .and("have.attr", "target", "_blank");
  }

  verifyRedirectToLoginPage() {
    cy.url().should("not.include", "/inventory.html");
    cy.get('[data-test="username"]').should("be.visible");
  }
}

export default new NavigationPage();
