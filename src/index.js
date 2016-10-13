import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';
import 'foundation-sites/css/normalize.css';
import 'foundation-sites/css/foundation.css';

import { app, router } from './app';
import about from './app/about';
import './main.scss';

let appModule = angular.module('app', [
  'ui.router',
  'mm.foundation'
]);

app(appModule);
about(appModule);
router(appModule);
