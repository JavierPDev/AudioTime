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

    let voices = speechSynthesis.getVoices();
    this._speechMsg = new SpeechSynthesisUtterance();
    this._speechMsg.lang = 'en-US';
    this._speechMsg.voice = voices[1];
  }

  listen() {
    console.log('service:listening');
    this._annyang.start();
  }

  stopListening() {
    console.log('service:stopListening');
    this._annyang.abort();
  }

  speak(phrase) {
    this._speechMsg.text = phrase;
    window.speechSynthesis.speak(this._speechMsg);
  }
}
