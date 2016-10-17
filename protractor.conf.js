var browser = process.env.TRAVIS ? 'Chrome_travis_ci' : 'chrome';
//
// Babel required for es6 code in e2e tests
require('babel-register');

exports.config = {
  baseUrl: 'http://localhost:8080',
  specs: ['./src/**/*.e2e.js'],
  multiCapabilities: [
    {
      'browserName': browser
    },
    // Current firefox version does not navigate to page. Disable until problem
    // fixed, though it seems to be a reocurring issue
    // See: https://github.com/angular/protractor/issues/3150
    // {
    //   'browserName': 'firefox'
    // }
  ]
};
