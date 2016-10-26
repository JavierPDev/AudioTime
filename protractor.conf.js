// Babel required for es6 code in e2e tests
require('babel-register');

var config = {
  baseUrl: 'http://localhost:8080',
  specs: ['./src/**/*.e2e.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  // Current firefox version does not navigate to page. Disable until problem
  // fixed, though it seems to be a reocurring issue
  // See: https://github.com/angular/protractor/issues/3150
  // {
  //   'browserName': 'firefox'
  // }
	onPrepare: function() {
		browser.manage().window().setSize(1280, 1024);
	}
};

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER
  };
} else {
  config.directConnect = true;
}

exports.config = config;
