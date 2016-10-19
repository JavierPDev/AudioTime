import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController {
  constructor($filter, $interval, stopwatchService, voiceService) {
    'ngInject';

    this._$filter = $filter;
    this._$interval = $interval;
    this._stopwatchService = stopwatchService;
    this._voiceService = voiceService;
  }

  start() {
    this.running = true;
    this.cleared = false;
    this._intervalPromise = this._$interval(() => {
      this.time++;
      // if (this.time === 1 || this.time % 10 === 0) {
        let phrase = this._voiceService.getTimePhrase(this.time);
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
    this.time = this._stopwatchService.time;
    this.running = false;
    this.cleared = true;
  }

  $onDestroy() {
    this._stopwatchService.time = this.time;
    this._$interval.cancel(this._intervalPromise);
  }
}
