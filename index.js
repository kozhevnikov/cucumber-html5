const { Formatter, JsonFormatter } = require('cucumber');
const { render } = require('mustache');
const { readFileSync } = require('fs');

class HtmlFormatter extends Formatter {
  constructor(options) {
    super(options);

    const view = options.html || {};

    options.eventBroadcaster.on('test-run-finished', () => {
      const noptions = Object.create(options, {
        eventBroadcaster: { value: { on: () => {} } },
        log: { value: (json) => { view.json = JSON.parse(json); } }
      });

      const formatter = new JsonFormatter(noptions);
      formatter.onTestRunFinished();

      const html = HtmlFormatter.render(view);
      options.log(html);
    });
  }

  static render(options) {
    const view = {
      title: options.title || 'Cucumber Report',
      json: options.json || []
    };

    view.features = view.json.map(feature => ({
      name: feature.name,
      description: feature.description
    }));

    const template = readFileSync(`${__dirname}/templates/index.mustache`, 'utf8');
    return render(template, view);
  }
}

module.exports = HtmlFormatter;
