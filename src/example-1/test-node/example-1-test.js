const assert = require('assert');
const fileToTest = require('../example-1.js');

describe('example 1', function() {
  it('should print it\'s location', function() {
    assert(fileToTest.location() === 'src/example-1/example-1.js');
  })
});
