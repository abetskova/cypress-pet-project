Feature: Different user types

    Scenario: Problem user experience
        Given I login as "problem_user"
        When I try to add products to cart
        Then I should experience UI issues

    Scenario: Performance glitch user
        Given I login as "performance_glitch_user"
        When I navigate through the site
        Then the site should load slowly

    Scenario: Locked out user
        Given I try to login as "locked_out_user"
        Then I should see "Sorry, this user has been locked out"