import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController {
  constructor($interval, timerService, voiceService) {
    'ngInject';

    this._$interval = $interval;
    this._timerService = timerService;
    this._voiceService = voiceService;
  }

  /**
   * Set component's time using seconds
   * @param {Number} secs - Seconds
   */
  _setTime(secs) {
    this.time = this._timerService.format(secs);
  }

  start() {
    this.running = true;
    this.cleared = false;
    this._intervalPromise = this._$interval(() => {
      this._timeSecs++;
      this._setTime(this._timeSecs);
      if (this._timeSecs === 1 || this._timeSecs % 10 === 0) {
        let phrase = this._timeSecs < 60 ? this._timeSecs : this.time;
        this._voiceService.speak(phrase);
      }
    }, 1000);
  }

  pause() {
    this._$interval.cancel(this._intervalPromise);
    this.running = false;
  }

  reset() {
    this._pause();
    this.cleared = true;
  }

  $onInit() {
    this._timeSecs = this._timerService.time;
    this._setTime(this._timeSecs);
    this.running = false;
    this.cleared = true;
  }

  $onDestroy() {
    this._timerService.time = this._timeSecs;
  }
}
