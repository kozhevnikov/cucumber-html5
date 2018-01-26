const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Step', () => {
  it('should have name', () => {
    const $ = load('features/step.feature');
    $('article > ol > li').texts().should.eql([
      'noop',
      'noop',
      'noop',
      'noop',
      'noop',
    ]);
  });
});
