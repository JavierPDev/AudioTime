import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController {
  constructor($filter, $interval, $scope, stopwatchService, voiceService) {
    'ngInject';

    this._$filter = $filter;
    this._$interval = $interval;
    this._$scope = $scope;
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
    this.running = false;
    this._$interval.cancel(this._intervalPromise);
  }

  reset() {
    this._pause();
    this.cleared = true;
  }

  $onInit() {
    this.time = this._stopwatchService.time;
    this.running = false;
    this.cleared = true;
    this._voiceService.listen();
    this._unlistenRecognition = this._$scope.$on('recognition.incoming',
        (event, command) => {
      if (command === 'start') {
        this.start();
      }
      if (command === 'pause') {
        this.pause();
      }
    });
  }

  $onDestroy() {
    this._unlistenRecognition();
    this._voiceService.stopListening();
    this._stopwatchService.time = this.time;
    this._$interval.cancel(this._intervalPromise);
  }
}
