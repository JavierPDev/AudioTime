import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController {
  constructor(timerService) {
    'ngInject';

    this.timerService = timerService;
    this.time = timerService.time;
  }
}
