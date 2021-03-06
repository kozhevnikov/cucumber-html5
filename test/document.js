const { describe, it } = require('mocha');
const lint = require('html5-lint');
require('should');

const { exec, load } = require('./exec');

describe('Document', () => {
  it('should be valid', (done) => {
    lint(exec('features/'), (error, { messages }) => {
      if (error) throw error;
      messages.should.be.empty();
      done();
    });
  });

  it('should have doctype', () => {
    exec('features/feature.feature').should.startWith('<!DOCTYPE html>');
  });

  it('should have default title', () => {
    const $ = load('features/feature.feature');
    $('title').text().should.equal('Cucumber Report');
  });

  it('should have custom title', () => {
    const $ = load('features/feature.feature', '--format-options', JSON.stringify({
      html: {
        title: 'Custom Title'
      }
    }));
    $('title').text().should.equal('Custom Title');
  });
});
