import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

import { app, router } from './app';
import { common } from './app/common';
import about from './app/about';
import settings from './app/settings';
import stopwatch from './app/stopwatch';
import timer from './app/timer';
import './main.scss';

let appModule = angular.module('app', [
  'ui.router',
  'mm.foundation'
]);

app(appModule);
common(appModule);
about(appModule);
settings(appModule);
stopwatch(appModule);
timer(appModule);
router(appModule);
