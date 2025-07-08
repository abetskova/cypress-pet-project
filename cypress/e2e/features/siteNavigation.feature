Feature: Site navigation

    Background:
        Given I am logged in as a standard user

    Scenario: Logout functionality
        When I click on the menu
        And I click "Logout"
        Then I should be redirected to login page

    Scenario: Menu navigation
        When I open the burger menu
        Then I should see all menu options
        And all links should be functional

    Scenario: Footer links
        When I scroll to footer
        Then I should see social media links
        And links should open in new tabs