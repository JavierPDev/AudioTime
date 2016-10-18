import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController {
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
