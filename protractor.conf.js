// Babel required for es6 code in e2e tests
require('babel-register');

exports.config = {
  baseUrl: 'http://localhost:8080',
  specs: ['./src/**/*.e2e.js'],
	onPrepare: function() {
		browser.manage().window().setSize(1280, 1024);
	}
};
