import annyang from 'annyang';

export default class VoiceService {
  constructor() {
    this._annyang = annyang;
    this._commands = {
      'blue': () => {
        document.body.style.background = 'blue';
      },
      'red': () => {
        document.body.style.background = 'red';
      }
    };
    this._annyang.addCommands(this._commands);
  }

  listen() {
    console.log('service:listening');
    this._annyang.start();
  }

  stopListening() {
    console.log('service:stopListening');
    this._annyang.abort();
  }
}
