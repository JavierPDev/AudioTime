var capabilities = {
  'browserName': 'chrome'
};

if (process.env.TRAVIS) {
  capabilities.chromeOptions = {
    'args': ['--no-sandbox']
  };
}

// Babel required for es6 code in e2e tests
require('babel-register');

exports.config = {
  baseUrl: 'http://localhost:8080',
  specs: ['./src/**/*.e2e.js'],
  capabilities: capabilities
};
