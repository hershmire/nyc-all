
import App from './App';

function location() {
  const location = 'src/example-1/example-1.js';
  return location;
}

function renderApp() {
  App(location());
}

module.exports = { location, renderApp };
