Feature: Login functionality

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        And I click the login button
        Then I should be redirected to the products page
        And I should see the products list