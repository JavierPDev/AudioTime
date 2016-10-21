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
  constructor($filter, $interval, $scope, $timeout,
      timerService, voiceService) {
    'ngInject';
    super(...arguments);
  }

  changeTime() {
    this.time = this.minInput * 60 + this.secInput;
  }

  reset() {
    super.reset();
    this.minInput = undefined;
    this.secInput = undefined;
  }

  _intervalFn() {
    if (this.time <= 0) {
      this.time = 0;
      this.pause();
      this.reset();
      return;
    }
    // if (this.time === 1 || this.time % 10 === 0) {
      let phrase = this._voiceService.getTimePhrase(this.time);
      this._voiceService.speak(phrase);
    // }
    this.time--;
  }
}
