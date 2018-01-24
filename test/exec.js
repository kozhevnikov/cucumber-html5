const { execFileSync } = require('child_process');

module.exports = (...args) => execFileSync('node_modules/cucumber/bin/cucumber.js', [
  ...args,
  '--format', '.',
  '--format-options', JSON.stringify({ colorsEnabled: false })
]).toString();
