Feature: Checkout process

    Background:
        Given I am logged in as a standard user
        And I have products in cart

    Scenario: Complete checkout with valid information
        When I proceed to checkout
        And I fill in shipping information
        And I complete the order
        Then I should see order confirmation
        And I should see "Thank you for your order!"

    Scenario: Checkout with missing information
        When I proceed to checkout
        And I leave required fields empty
        Then I should see validation errors