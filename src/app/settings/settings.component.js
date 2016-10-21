import template from './settings.component.html';
import './settings.component.scss';

export default function SettingsComponent(appModule) {
  appModule.component('atSettings', {
    template: template,
    controller: SettingsController
  });
}

class SettingsController {
  constructor(stopwatchService, timerService, voiceService) {
    'ngInject';
    this._stopwatchService = stopwatchService;
    this._timerService = timerService;
    this._voiceService = voiceService;
  }

  $onInit() {
    this.delay = this._stopwatchService.delay || this._timerService.delay;
    this.audioVoice = this._voiceService.setting;
  }

  $onDestroy() {
    this._stopwatchService.delay = this.delay;
    this._timerService.delay = this.delay;
    this._voiceService.setting = this.audioVoice;
  }
}
