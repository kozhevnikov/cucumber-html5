const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Step', () => {
  it('should have name', () => {
    const $ = load('features/step.feature');
    $('.step-name').texts().should.eql([
      'Given noop',
      'When noop',
      'Then noop',
      'And noop',
      'But noop',
    ]);
  });
});
