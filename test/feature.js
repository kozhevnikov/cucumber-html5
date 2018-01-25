const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Feature', () => {
  it('should have name', () => {
    const $ = load('features/', '--name', 'Feature ?\\d*');
    $('main > section > header > h1').texts().should.eql([
      'Feature',
      'Feature 2'
    ]);
  });

  it('should have description', () => {
    const $ = load('features/description.feature');
    $('section > header > p').text().should.equal(
      '  As a\n' +
      '  I want\n' +
      '  So that');
  });
});
