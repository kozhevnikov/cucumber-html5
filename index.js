const { Formatter } = require('cucumber');

class PrettyFormatter extends Formatter {
  constructor(options) {
    super(options);
    this.log('<!DOCTYPE html>');
  }
}

module.exports = PrettyFormatter;
