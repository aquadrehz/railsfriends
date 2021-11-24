/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        app(route: string, options: any): void;
        appCommands(params: { name: string; options: any }): Promise<any>;
        appScenario(name: any, options?: object): Promise<any>;
        appEval(code: any): Promise<any>;
        appFactories(option: any): Promise<any>;
        appFixtures(option: any): Promise<any>;
    }
}