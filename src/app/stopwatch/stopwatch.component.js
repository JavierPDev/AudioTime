import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController {
  constructor(voiceService) {
    'ngInject';

    this._voiceService = voiceService;
  }

  $onInit() {
    this.listening = false;
  }

  listen() {
    console.log('component:listening');
    this.listening = true;
    this._voiceService.listen();
  }

  stopListening() {
    console.log('component:stopListening');
    this.listening = false;
    this._voiceService.stopListening();
  }
}
