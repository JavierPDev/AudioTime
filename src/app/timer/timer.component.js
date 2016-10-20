import { TimekeeperController } from '../common';
import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController extends TimekeeperController {
  constructor($filter, $interval, $scope, stopwatchService, voiceService) {
    'ngInject';
    super(...arguments);
  }

  _intervalFn() {
    this.time++;
    // if (this.time === 1 || this.time % 10 === 0) {
      let phrase = this._voiceService.getTimePhrase(this.time);
      this._voiceService.speak(phrase);
    // }
  }
}
