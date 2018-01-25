const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Features', () => {
  it('should have feature names', () => {
    const $ = load('features/', '--name', 'Feature ?\\d*');
    $('main > section > header > h1').texts().should.eql([
      'Feature',
      'Feature 2'
    ]);
  });
});
