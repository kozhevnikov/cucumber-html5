const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Docstring', () => {
  it('should have docstring', () => {
    const $ = load('features/docstring.feature');
    $('article > section > section > pre').text().should.equal(
      'Lorem ipsum\n' +
      'dolor sit amet'
    );
  });
});
