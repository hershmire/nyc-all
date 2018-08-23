
function location(name) {
  // Tests will never make it to `name` on purpose to force lower code coverage
  let location = 'src/example-2/example-2.js' || name;
  return location;
}

module.exports = { location };
