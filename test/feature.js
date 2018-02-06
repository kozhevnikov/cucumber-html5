const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Feature', () => {
  it('should have name', () => {
    const $ = load('features/', '--name', 'Feature ?\\d*');
    $('.feature-name').texts().should.eql([
      'Feature: Feature',
      'Feature: Feature 2'
    ]);
  });

  it('should have description', () => {
    const $ = load('features/description.feature');
    $('.feature-description').text().should.equal(
      '  As a\n' +
      '  I want\n' +
      '  So that'
    );
  });
});
