[![Build Status](https://travis-ci.org/JavierPDev/AudioTime.svg?branch=master)](https://travis-ci.org/JavierPDev/AudioTime)

# Audio Time
Timer and stopwatch voice/audio web app. No seed project or generator used. Project uses component based thinking for design and development. Webkit's native speech api is used so Chrome is needed to run the web app.

### Tools used:
* ES6 (through Babel)
* Webpack
* Angularjs
* Webkit speech recognition API
* Webkit speech synthesis API
* Foundation
* Angular-foundation
* Babel
* eslint
* Karma test runner
* Jasmine testing framework
* Protractor end-to-end testing framework for Angularjs
* Travis CI

### Instructions
```bash
# Install dependencies
npm install

# Start app in development server
npm start

# Run unit tests and end-to-end tests in production mode
npm test

# Build app into /dist directory
npm run build

# Run server using production files in /dist
npm run server.prod

# Run unit tests
npm run test.unit

# Run unit tests in watch mode as daemon
npm run testd.unit

# Run end-to-end test in development mode
npm run test.e2e.dev

# Run end-to-end tests in production mode. Slower than dev but more accurate for end user experience.
npm run test.e2e.prod
```
