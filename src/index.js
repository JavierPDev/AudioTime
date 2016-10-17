import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

import { app, router } from './app';
import about from './app/about';
import stopwatch from './app/stopwatch';
import timer from './app/timer';
import voice from './app/voice';
import './main.scss';

let appModule = angular.module('app', [
  'ui.router',
  'mm.foundation'
]);

app(appModule);
about(appModule);
stopwatch(appModule);
timer(appModule);
voice(appModule);
router(appModule);
