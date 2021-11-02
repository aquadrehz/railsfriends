/// <reference types="cypress" />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
// Import additional layer for reusing command
import Common from "../Common";

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