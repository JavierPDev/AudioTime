export default class TimekeeperController {
  constructor($filter, $interval, $scope, timekeeperService, voiceService) {
    'ngInject';
    this._$filter = $filter;
    this._$interval = $interval;
    this._$scope = $scope;
    this._timekeeperService = timekeeperService;
    this._voiceService = voiceService;
  }

  start() {
    this.running = true;
    this.cleared = false;
    // _intervalFn to be implemented in child class
    this._intervalPromise = this._$interval(this._intervalFn.bind(this), 1000);
  }

  pause() {
    this.running = false;
    this._$interval.cancel(this._intervalPromise);
  }

  reset() {
    this.pause();
    this.cleared = true;
  }

  $onInit() {
    this.time = this._timekeeperService.time;
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
    this._timekeeperService.time = this.time;
    this._$interval.cancel(this._intervalPromise);
  }
}

