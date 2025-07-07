Feature: Products functionality

    Background:
        Given I am logged in as a standard user

    Scenario: View product details
        When I click on a product
        Then I should see product details page
        And I should see product name, description, and price

    Scenario: Add product to cart
        When I add a product to cart
        Then the cart badge should show "1"
        And the product should be in the cart

    Scenario: Sort products by price
        When I sort products by "Price (low to high)"
        Then products should be sorted by ascending price