const assert = require('assert');
const fileToTest = require('../example-2.js');

describe('example 2', function() {
  it('should print it\'s location', function() {
    assert(fileToTest.location() === 'src/example-2/example-2.js');
  })
});
