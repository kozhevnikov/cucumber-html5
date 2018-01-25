const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Scenario', () => {
  it('should have name', () => {
    const $ = load('features/scenario.feature', '--name', 'Scenario ?\\d*');
    $('main > section > article > h2').texts().should.eql([
      'Scenario',
      'Scenario 2'
    ]);
  });
});
