var expect = require('chai').expect;
var TrueLib = require('../');

describe('trueLib', function() {
  it('is true', function() {
    expect(TrueLib()).to.equal(true);
  });
});
