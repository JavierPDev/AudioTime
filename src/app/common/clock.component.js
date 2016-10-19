import template from './clock.component.html';
import './clock.component.scss';

export default function ClockComponent(appModule) {
  appModule.component('atClock', {
    template: template,
    controller: ClockController,
    bindings: {
      cleared: '<',
      running: '<',
      time: '<'
    }
  });
}

class ClockController {}

