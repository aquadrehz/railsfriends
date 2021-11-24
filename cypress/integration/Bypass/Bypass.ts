/// <reference types="cypress" />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import Common from "../Common";

// Keyword need to be called by Feature files
Given('bypass login', () => {
    cy.fixture('correct_user').then((user_json)=>{
        cy.app('google_oauth2_mock', user_json)
    })
    cy.visit('/')
    cy.get('a').contains('Sign in with GoogleOauth2').click()
});

Then('sign out displayed on menu bar', () => {
    Common.signOutDisplayed()
});