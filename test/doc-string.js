const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Doc String', () => {
  it('should have doc string', () => {
    const $ = load('features/doc-string.feature');
    $('.doc-string').text().should.equal(
      'Lorem ipsum\n' +
      'dolor sit amet'
    );
  });
});
