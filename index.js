const { Formatter } = require('cucumber');

class PrettyFormatter extends Formatter {
  constructor(options) {
    super(options);
  }
}

module.exports = PrettyFormatter;
