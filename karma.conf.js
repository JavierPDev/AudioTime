// Babel required for es6 code in webpack config
require('babel-register');

var webpackConfig = require('./webpack.dev.config.babel.js');
var browsers = process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'];
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // Explicitly set plugins otherwise karma sometimes fails
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-mocha-reporter'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],

    // list of files / patterns to load in the browser
    files: [
      // Since es6 and imports are being used, only need to set entry point
      './src/index.js',

      // Above entry point loads dependencies
      // load angular-mocks manually for testing
      './node_modules/angular-mocks/angular-mocks.js',

      // Load test spec files
      './src/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/index.js': ['webpack', 'sourcemap'],
      './src/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: browsers,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
