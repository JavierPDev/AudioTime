import { TimekeeperController } from '../common';
import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController extends TimekeeperController {
  constructor($filter, $interval, $scope, $timeout,
      stopwatchService, voiceService) {
    'ngInject';
    super(...arguments);
  }

  _intervalFn() {
    this.time++;
    if (this._voiceService.setting === 'audio') {
      let phrase = this._voiceService.getTimePhrase(this.time);
      this._voiceService.speak(phrase);
    }
  }
}
