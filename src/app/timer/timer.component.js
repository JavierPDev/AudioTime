import template from './timer.component.html';
import './timer.component.scss';

export default function TimerComponent(appModule) {
  appModule.component('atTimer', {
    template: template,
    controller: TimerController
  });
}

class TimerController {
  constructor(VoiceService) {
    'ngInject';

    this.listening = false;
    this._VoiceService = VoiceService;
  }

  listen() {
    console.log('component:listening');
    this.listening = true;
    this._VoiceService.listen();
  }

  stopListening() {
    console.log('component:stopListening');
    this.listening = false;
    this._VoiceService.stopListening();
  }
}
