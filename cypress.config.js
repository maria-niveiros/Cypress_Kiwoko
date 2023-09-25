const { defineConfig } = require('cypress')
const Mochawesome = require('mochawesome')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    video: true,
    reporter: 'mochawesome'
  },
})
