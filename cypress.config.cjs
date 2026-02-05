const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    baseUrl: 'https://www.demoblaze.com/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    viewportWidth: 1440,
    viewportHeight: 1080,
  },
});
