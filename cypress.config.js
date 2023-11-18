const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    something: "development",
    setupNodeEvents(config) {
      config.specPattern = [
        "cypress\e2e\search\tests\search.cy.ts"
      ];
      return config;
    },
    chromeWebSecurity: false,
    requestTimeout: 20000,
    responseTimeout: 60000,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    execTimeout: 20000,
    taskTimeout: 20000,
  },
});
