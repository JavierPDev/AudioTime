export default class TimekeeperController {
  constructor($filter, $interval, $scope, $timeout,
      timekeeperService, voiceService) {
    'ngInject';
    this._$filter = $filter;
    this._$interval = $interval;
    this._$scope = $scope;
    this._$timeout = $timeout;
    this._timekeeperService = timekeeperService;
    this._voiceService = voiceService;
  }

  start() {
    if (this.running) return;
    const context = this;
    this.running = true;
    this.cleared = false;
    if (this._timekeeperService.delay >= 0) {
      this._$timeout(() => {
        this._intervalPromise = this._$interval(this._intervalFn.bind(context), 1000);
      }, 1000 * this._timekeeperService.delay);
    } else {
      this._intervalPromise = this._$interval(this._intervalFn.bind(context), 1000);
    }
  }

  pause() {
    this.running = false;
    this._$interval.cancel(this._intervalPromise);
  }

  reset() {
    this.pause();
    this.cleared = true;
    this.time = 0;
  }

  $onInit() {
    this.time = this._timekeeperService.time;
    this.running = false;
    this.cleared = true;
    if (this._voiceService.setting === 'voice') {
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
  }

  $onDestroy() {
    if (this._voiceService.setting === 'voice') {
      this._unlistenRecognition();
      this._voiceService.stopListening();
    }
    this._timekeeperService.time = this.time;
    this._$interval.cancel(this._intervalPromise);
  }
}

