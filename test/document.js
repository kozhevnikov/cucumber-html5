const { describe, it } = require('mocha');
const lint = require('html5-lint');
require('should');

const exec = require('./exec');

describe('Document', () => {
  it('should be valid', (done) => {
    lint(exec('features/'), (error, { messages }) => {
      if (error) throw error;
      messages.should.be.empty();
      done();
    });
  });

  it('should log doctype', () => {
    exec('features/feature.feature').should.startWith('<!DOCTYPE html>');
  });
});
