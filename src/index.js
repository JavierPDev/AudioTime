import 'babel-polyfill';
import angular from 'angular';
import 'angular-ui-router';
import ngAnimate from 'angular-animate';
import 'angular-foundation';

import { app, router } from './app';
import { common } from './app/common';
import about from './app/about';
import settings from './app/settings';
import stopwatch from './app/stopwatch';
import timer from './app/timer';
import './main.scss';

const speechCapable = window.webkitSpeechRecognition;
const utteranceCapable = window.speechSynthesis;

if (speechCapable && utteranceCapable) {
  bootstrapApp();
} else {
  notifyUserOfBrowserRequirements();
}

function bootstrapApp() {
  const appModule = angular.module('app', [
    ngAnimate,
    'ui.router',
    'mm.foundation',
  ]);

  app(appModule);
  common(appModule);
  about(appModule);
  settings(appModule);
  stopwatch(appModule);
  timer(appModule);
  router(appModule);
}

function notifyUserOfBrowserRequirements() {
  const spinner = document.querySelector('.loading-spinner');
  const div = document.createElement('div');
  spinner.remove();
  div.innerText = 'Google Chrome/Webkit Speech Recognition and Speech Utterance'
    +' required. Please try again with Google Chrome. Some versions of Chrome,'
    +' such as Chrome for iOS, may not work.';
  div.className = 'alert-box warning';
  document.body.appendChild(div);
}
