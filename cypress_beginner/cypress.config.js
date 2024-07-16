const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://erickwendel.github.io/vanilla-js-web-app-example/',
    // does not clear the window status after each 'it'
    testIsolation: false
  },
});
