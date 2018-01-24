const { Formatter } = require('cucumber');
const { render } = require('mustache');
const { readFileSync } = require('fs');

class HtmlFormatter extends Formatter {
  constructor(options) {
    super(options);

    options.eventBroadcaster.on('test-run-finished', () => {
      const html = HtmlFormatter.render(options.html);
      this.log(html);
    });
  }

  static render(options = {}) {
    const template = readFileSync(`${__dirname}/templates/index.mustache`, 'utf8');
    return render(template, options);
  }
}

module.exports = HtmlFormatter;
