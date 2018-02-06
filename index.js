const { Formatter, JsonFormatter } = require('cucumber');
const { render } = require('mustache');
const { readFileSync } = require('fs');
const pretty = require('pretty');

class HtmlFormatter extends Formatter {
  constructor(options) {
    super(options);
    options.eventBroadcaster.on('test-run-finished', () => {
      const view = options.html || {};

      const noptions = Object.create(options, {
        eventBroadcaster: { value: { on: () => {} } },
        log: { value: (json) => { view.json = JSON.parse(json); } }
      });

      const formatter = new JsonFormatter(noptions);
      formatter.onTestRunFinished();

      const html = HtmlFormatter.render(view);
      this.log(html);
    });
  }

  static render(options) {
    const json = options.json || [];

    const data = {
      title: options.title || 'Cucumber Report',

      features: json.map(jsonFeature => ({
        keyword: jsonFeature.keyword,
        name: jsonFeature.name,
        description: jsonFeature.description,

        scenarios: jsonFeature.elements.map(jsonScenario => ({
          keyword: jsonScenario.keyword,
          name: jsonScenario.name,
          description: jsonScenario.description,

          steps: jsonScenario.steps.map((jsonStep) => {
            const step = {
              keyword: jsonStep.keyword.trim(),
              name: jsonStep.name,
            };

            if (jsonStep.arguments) {
              jsonStep.arguments.forEach((jsonArgument) => {
                if (jsonArgument.content) step.doc_string = jsonArgument.content;
                if (jsonArgument.rows) step.data_table = jsonArgument.rows.map(row => row.cells);
              });
            }

            return step;
          })
        }))
      }))
    };

    const view = readFileSync(`${__dirname}/views/index.mustache`, 'utf8');
    const html = render(view, data);
    return pretty(html, { ocd: true });
  }
}

module.exports = HtmlFormatter;
