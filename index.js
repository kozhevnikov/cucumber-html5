const { Formatter } = require('cucumber');
const { render } = require('mustache');
const { readFileSync } = require('fs');

class PrettyFormatter extends Formatter {
  constructor(options) {
    super(options);

    options.eventBroadcaster.on('test-run-finished', () => {
      const template = readFileSync(`${__dirname}/templates/index.mustache`, 'utf8');
      const html = render(template);
      this.log(html);
    });
  }
}

module.exports = PrettyFormatter;
