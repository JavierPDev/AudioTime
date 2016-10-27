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
      timerService, speechService) {
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
    this.time--;
    const audioEnabled = this._speechService.setting === 'audio';
    const isInterval = this.time % this._speechService.interval === 0
      || this.time === 1;
    if (audioEnabled && isInterval) {
      let phrase = this._speechService.getTimePhrase(this.time);
      this._speechService.speak(phrase);
    }
  }
}
