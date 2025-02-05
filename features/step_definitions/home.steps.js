// features/step_definitions/steps.js
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import assert from 'node:assert';
import puppeteer from 'puppeteer';

let browser;
let page;

// Runs before each scenario
Before(async function() {
  // Launch browser
  browser = await puppeteer.launch({
    headless: true,
  });
  page = await browser.newPage();
});

// Runs after each scenario
After(async function() {
  // Cleanup
  if (browser) {
    await browser.close();
  }
});

Given('I am on the home page', async function() {
  await page.goto('http://localhost:5173', {
    waitUntil: 'networkidle0'
  });
});

Then('I should see the title {string}', async function(titleText) {
  const title = await page.waitForSelector('[data-testid="home-title"]');
  const text = await title.evaluate(el => el.textContent);
  assert.equal(text, titleText, 'Title text should match');
});

Then('I should see a {string} button', async function(buttonText) {
  const button = await page.waitForSelector('[data-testid="get-started-button"]');
  const text = await button.evaluate(el => el.textContent);
  assert.equal(text.trim(), buttonText, 'Button text should match');
});

When('I click the {string} button', async function(buttonText) {
  const button = await page.waitForSelector('[data-testid="get-started-button"]');
  await button.click();
  
  // Wait for navigation to complete
  await page.waitForNavigation({
    waitUntil: 'networkidle0'
  });
});

Then('I should be redirected to the todo page', async function() {
  const url = page.url();
  assert.ok(url.includes('/to-do'), 'Should be redirected to todo page');
});