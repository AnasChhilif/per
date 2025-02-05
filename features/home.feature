Feature: Home Page
  As a user
  I want to see a welcoming home page
  So that I can start using the todo application

  Scenario: Viewing the home page
    Given I am on the home page
    Then I should see the title "Welcome to Todo App"
    And I should see a "Get Started" button

  Scenario: Navigating to todo page
    Given I am on the home page
    When I click the "Get Started" button
    Then I should be redirected to the todo page