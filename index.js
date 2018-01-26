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
    const json = options.json || [];

    const view = {
      title: options.title || 'Cucumber Report',
      features: json.map(f => ({
        keyword: f.keyword,
        name: f.name,
        description: f.description,
        scenarios: f.elements.map(e => ({
          keyword: e.keyword,
          name: e.name,
          description: e.description,
          steps: e.steps.map((s) => {
            const step = {
              keyword: s.keyword.trim(),
              name: s.name,
            };

            if (s.arguments) {
              s.arguments.forEach((a) => {
                if (a.content) step.docstring = a.content;
                if (a.rows) step.datatable = a;
              });
            }

            return step;
          })
        }))
      }))
    };

    const template = readFileSync(`${__dirname}/templates/index.mustache`, 'utf8');
    return render(template, view);
  }
}

module.exports = HtmlFormatter;
