const { describe, it } = require('mocha');
require('should');

const exec = require('./exec');

describe('Document', () => {
  it('should log doctype', () => {
    exec('features/feature.feature').should.startWith('<!DOCTYPE html>');
  });
});
