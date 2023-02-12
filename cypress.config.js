const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for generating html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure: true;
      pageLoadTimeout: 15000;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
