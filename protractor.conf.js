// Babel required for es6 code in e2e tests
require('babel-register');

exports.config = {
  baseUrl: 'http://localhost:8080',
  specs: ['./src/**/*.e2e.js'],
  multiCapabilities: [
    {
      'browserName': 'chrome'
    },
    // Current firefox version does not navigate to page. Disable until problem
    // fixed, though it seems to be a reocurring issue
    // See: https://github.com/angular/protractor/issues/3150
    // {
    //   'browserName': 'firefox'
    // }
  ],
	onPrepare: function() {
		browser.manage().window().setSize(1280, 1024);
	}
};
