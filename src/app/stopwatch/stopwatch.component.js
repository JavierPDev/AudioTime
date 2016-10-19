import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController {
  constructor($interval, stopwatchService, voiceService) {
    'ngInject';

    this._$interval = $interval;
    this._stopwatchService = stopwatchService;
    this._voiceService = voiceService;
  }

  /**
   * Set component's time using seconds
   * @param {Number} secs - Seconds
   */
  _setTime(secs) {
    this.time = this._stopwatchService.format(secs);
  }

  start() {
    this.running = true;
    this.cleared = false;
    this._intervalPromise = this._$interval(() => {
      this._timeSecs++;
      this._setTime(this._timeSecs);
      // if (this._timeSecs === 1 || this._timeSecs % 10 === 0) {
        let phrase = this._timeSecs < 60 ? this._timeSecs : this.time;
        this._voiceService.speak(phrase);
      // }
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
    this._timeSecs = this._stopwatchService.time;
    this._setTime(this._timeSecs);
    this.running = false;
    this.cleared = true;
  }

  $onDestroy() {
    this._stopwatchService.time = this._timeSecs;
    this._$interval.cancel(this._intervalPromise);
  }
}
