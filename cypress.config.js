const { defineConfig } = require("cypress");
const fs = require('fs');
module.exports = defineConfig({
  e2e: {
    something: "development",
    setupNodeEvents(on, config) {
      on('task', {readDirectory: (path) => {
        return fs.readdirSync(path);
      },
    });
      config.specPattern = [
       "cypress/e2e/authentication/login/tests/login.cy.ts",
       "cypress/e2e/authentication/login/tests/loginInvalido.cy.ts",
       "cypress/e2e/search/tests/search.cy.ts",
       "cypress/e2e/register/tests/register.cy.ts"
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

