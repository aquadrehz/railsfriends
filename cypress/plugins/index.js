const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = (on, config) => {
    // Configure from cypress-cucumber-preprocessor
    const options = browserify.defaultOptions;
    options.browserifyOptions.plugin.unshift(['tsify']);
    // Or, if you need a custom tsconfig.json for your test files:
    // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);
    on("file:preprocessor", cucumber(options));

    // Configure from cypress-visual-regression
    getCompareSnapshotsPlugin(on, config);
};
