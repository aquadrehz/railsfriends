/// <reference types="cypress" />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
// Import additional layer for reusing command
import Common from '../Common';

// Keyword need to be called by Feature files
Given('go to railsfriend page', () => {
    Common.goToLoginPage();
});

When('click Sign in on menu bar', () => {
    Common.clickSignin();
});

When('fill username with {string}', (username: string) => {
    Common.fillUsername(username)
});

When('fill password with {string}', (password: string) => {
    Common.fillPassword(password)
});

When('click Log in button', () => {
    Common.clickLogin();
});

Then('sign out displayed on menu bar', () => {
    Common.signOutDisplayed()
});

// This will compare all page with screenshot named 'landing_page' and 0 threshold
Then('landing page is not changes', () => {
    // @ts-ignore Because IDE could not resolve this command directly
    cy.compareSnapshot('landing_page', 0.0);
});

// This will compare a single component with screenshot named 'nav_bar' and 0 threshold
Then('navigation bar is not changes', () => {
    // @ts-ignore Because IDE could not resolve this command directly
    cy.get('.navbar').compareSnapshot('nav_bar', 0.0);
});