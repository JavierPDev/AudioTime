import annyang from 'annyang';

export default class VoiceService {
  constructor($filter) {
    'ngInject';
    this._annyang = annyang;
    this._$filter = $filter;
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
    this._speechMsg.rate = 2.5;
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

  /**
   * Get time as a phrase. Return a number unless input is a minute ie. 2:00
   * @param {Number} time - Time in seconds
   * @return {Any} Time as phrase. Either number eg. 3 or string eg. '1 minute'
   */
  getTimePhrase(time) {
    let phrase;
    let isMin = time % 60;
    if (time < 60) {
      phrase = time;
    } else if (isMin === 0) {
      let min = time / 60;
      let isSingular = min === 1;
      phrase = isSingular ? min + ' minute' : min + ' minutes';
    } else {
      phrase = this._$filter('formatTime')(time);
    }
    return phrase;
  }
}
