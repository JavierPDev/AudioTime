[![Build Status](https://travis-ci.org/JavierPDev/AudioTime.svg?branch=master)](https://travis-ci.org/JavierPDev/AudioTime)

# Audio Time
Timer voice web app. No seed project or generator used. Project uses component based thinking for design and development. Chrome's native speech api is used so chrome is needed to run the web app.

### Tools used:
* ES6
* Webpack
* Angularjs
* Annyang
* Webkit speech API
* Foundation
* Angular-foundation
* Babel
* eslint
* Karma test runner
* Jasmine testing framework
* Protractor end-to-end testing framework for Angularjs

### Instructions
```bash
# Install dependencies
npm install

# Start app in development server
npm start

# Build app into /dist directory
npm run build

# Run server using production files in /dist
npm run server.prod

# Run unit tests and end-to-end tests in production mode
npm test

# Run unit tests
npm run test.unit

# Run unit tests in watch mode as daemon
npm run testd.unit

# Run end-to-end test in development mode
npm run test.e2e.dev

# Run end-to-end tests in production mode. Slower than dev but more accurate for end user experience.
npm run test.e2e.prod
```

###### Known Issues

* Foundation CSS is loaded after app-specific CSS. [This is a common problem with webpack and some its loaders/plugins](https://github.com/webpack/webpack/issues/215).
