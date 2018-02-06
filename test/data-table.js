const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('Data Table', () => {
  it('should have data table', () => {
    const $ = load('features/data-table.feature');
    $('.data-table td').texts().should.eql([
      'foo', 'bar', 'baz', 'qux'
    ]);
  });
});
