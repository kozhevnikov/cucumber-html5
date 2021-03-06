const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Hook', () => {
  it('should have before and after', () => {
    const $ = load('features/hook.feature');
    $('.step-name').texts().should.eql([
      'Before ',
      'When noop',
      'Then noop',
      'After '
    ]);
  });
});
