const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Scenario', () => {
  it('should have name', () => {
    const $ = load('features/scenario.feature', '--name', 'Scenario ?\\d*');
    $('article > section > h2').texts().should.eql([
      'Scenario: Scenario',
      'Scenario: Scenario 2'
    ]);
  });

  it('should have description', () => {
    const $ = load('features/description.feature');
    $('article > section > pre').texts().should.eql([
      '  Description of scenario',
      '  Description of scenario outline',
      '  Description of scenario outline'
    ]);
  });
});
