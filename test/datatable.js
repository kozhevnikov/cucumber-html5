const { describe, it } = require('mocha');
require('should');

const { load } = require('./exec');

describe('DataTable', () => {
  it('should have datatable', () => {
    const $ = load('features/datatable.feature');
    $('article > section > section > table td').texts().should.eql([
      'foo', 'bar', 'baz', 'qux'
    ]);
  });
});
