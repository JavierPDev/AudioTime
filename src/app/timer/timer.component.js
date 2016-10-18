import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController {
  constructor(timerService, voiceService) {
    'ngInject';

    this._timerService = timerService;
    this._voiceService = voiceService;
  }

  /**
   * Set component's time using seconds
   * @param {Number} secs - Seconds
   */
  setTime(secs) {
    this.time = this._timerService.format(secs);
  }

  $onInit() {
    this.time = this._timerService.time;
  }

  $onDestroy() {
    this._timerService.time = this.time;
  }
  
  speak() {
    console.log('phrase', this.phrase);
    this._voiceService.speak(this.phrase);
  }
}
