const { execFileSync } = require('child_process');
const cheerio = require('cheerio');

exports.exec = (...args) => execFileSync('node_modules/cucumber/bin/cucumber-js', [
  ...args,
  '--format', '.',
  '--format-options', JSON.stringify({ colorsEnabled: false })
]).toString();

exports.load = (...args) => cheerio.load(exports.exec(...args));

cheerio.prototype.texts = function texts() {
  return this.map(function text() {
    return cheerio(this).text();
  }).toArray();
};
