import template from './stopwatch.component.html';
import './stopwatch.component.scss';

export default function StopwatchComponent(appModule) {
  appModule.component('atStopwatch', {
    template: template,
    controller: StopwatchController
  });
}

class StopwatchController {
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
