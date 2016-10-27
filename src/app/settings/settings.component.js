import template from './settings.component.html';
import './settings.component.scss';

export default function SettingsComponent(appModule) {
  appModule.component('atSettings', {
    template: template,
    controller: SettingsController
  });
}

class SettingsController {
  constructor(stopwatchService, timerService, speechService) {
    'ngInject';
    this._stopwatchService = stopwatchService;
    this._timerService = timerService;
    this._speechService = speechService;
  }

  $onInit() {
    this.delay = this._stopwatchService.delay || this._timerService.delay;
    this.interval = this._speechService.interval;
    this.audioVoice = this._speechService.setting;
  }

  $onDestroy() {
    this._stopwatchService.delay = this.delay;
    this._timerService.delay = this.delay;
    this._speechService.interval = this.interval;
    this._speechService.setting = this.audioVoice;
    localStorage.delay = this.delay;
    localStorage.interval = this.interval;
    localStorage.audioVoice = this.audioVoice;
  }
}
