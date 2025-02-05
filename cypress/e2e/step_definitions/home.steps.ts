import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/');
});

Then('I should see the title {string}', (titleText) => {
  cy.get('[data-testid="home-title"]')
    .should('be.visible')
    .and('have.text', titleText);
});

Then('I should see a {string} button', (buttonText) => {
  cy.get('[data-testid="get-started-button"]')
    .should('be.visible')
    .and('have.text', buttonText);
});

When('I click the "Get Started" button', () => {
  // First ensure button is actionable
  cy.get('[data-testid="get-started-button"]')
    .should('be.visible')
    // Scroll button into view
    .scrollIntoView()
    // Wait for any animations/transitions
    .wait(500)
    // Click in center of button
    .click({ timeout: 10000, waitForAnimations: true })
    .then(() => {
      cy.log('Button clicked');
    });
});

Then('I should be redirected to the todo page', () => {
  cy.url().should('include', '/to-do');
});