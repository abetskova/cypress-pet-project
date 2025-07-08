Feature: Login functionality

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        And I click the login button
        Then I should be redirected to the products page
        And I should see the products list

    Scenario: Login with invalid username
        Given I am on the login page
        When I enter username "invalid_user" and password "secret_sauce"
        And I click the login button
        Then I should see error message "Username and password do not match any user in this service"

    Scenario: Login with invalid password
        Given I am on the login page
        When I enter username "standard_user" and password "wrong_password"
        And I click the login button
        Then I should see error message "Username and password do not match any user in this service"

    Scenario: Login with empty fields
        Given I am on the login page
        When I click the login button
        Then I should see error message "Username is required"