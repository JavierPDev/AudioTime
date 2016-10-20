export default class VoiceService {
  constructor($filter, $rootScope) {
    'ngInject';
    this._$filter = $filter;
    this._$rootScope = $rootScope;
    
    this._setupRecognition();
    this._setupTextToSpeech();
  }

  /**
   * Set up voice recognition process using webkit's api
   */
  _setupRecognition() {
    let initRecog = () => {
      this._recognitionResultIndex = 0;
      this._recognition = new webkitSpeechRecognition();
      this._recognition.continuous = true;
      this._recognition.onresult = (event) => {
        let msg = event.results[this._recognitionResultIndex++][0].transcript;
        let command;
        if (/star|art|park|cars/i.test(msg)) {
          command = 'start';
        }
        if (/paws|paul|stop|stock|stuff|spa|bob/i.test(msg)) {
          command = 'pause';
        }
        this._$rootScope.$broadcast('recognition.incoming', command);
        console.log(`Latest speech phrase: '${msg}' Parsed command: '${command}'`);
      };
      this._recognition.onend = (event) => {
        initRecog();
        this.listen();
      };
    };
    initRecog();
  }

  /**
   * Set up text to speech process using webkit's api
   */
  _setupTextToSpeech() {
    let voices = speechSynthesis.getVoices();
    this._speechMsg = new SpeechSynthesisUtterance();
    this._speechMsg.rate = 2.5;
    this._speechMsg.lang = 'en-US';
    this._speechMsg.voice = voices[1];
  }

  listen() {
    this._recognition.start();
  }

  stopListening() {
    this._recognition.stop();
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
