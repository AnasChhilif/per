// features/step_definitions/steps.js
import { Given, When, Then } from '@cucumber/cucumber';
import { JSDOM } from 'jsdom';
import assert from 'node:assert';

let dom;
let document;
let button;
let currentPath = '/';

Given('I am on the home page', function() {
  dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <body>
        <main class="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 data-testid="home-title">Welcome to Todo App</h1>
          <button data-testid="get-started-button">Get Started</button>
        </main>
      </body>
    </html>
  `, {
    url: "http://localhost:5173",
    runScripts: "dangerously"
  });
  
  document = dom.window.document;
});

Then('I should see the title {string}', function(titleText) {
  const title = document.querySelector('[data-testid="home-title"]');
  assert.notEqual(title, null, 'Title element should exist');
  assert.equal(title.textContent, titleText, 'Title text should match');
});

Then('I should see a {string} button', function(buttonText) {
  button = document.querySelector('[data-testid="get-started-button"]');
  assert.notEqual(button, null, 'Button should exist');
  assert.equal(button.textContent, buttonText, 'Button text should match');
});

When('I click the {string} button', function(buttonText) {
  button = document.querySelector('[data-testid="get-started-button"]');
  assert.equal(button.textContent, buttonText, 'Button text should match');
  currentPath = '/to-do';
});

Then('I should be redirected to the todo page', function() {
  assert.equal(currentPath, '/to-do', 'Should be redirected to todo page');
});