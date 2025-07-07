Feature: Shopping cart functionality

    Background:
        Given I am logged in as a standard user
        And I have added products to cart

    Scenario: View cart contents
        When I open the cart
        Then I should see all added products
        And I should see correct quantities and prices

    Scenario: Remove product from cart
        When I open the cart
        And I remove a product from cart
        Then the product should be removed
        And cart count should decrease

    Scenario: Continue shopping from cart
        When I open the cart
        And I click "Continue Shopping"
        Then I should return to products page