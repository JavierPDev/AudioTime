export default class TimekeeperService {
  constructor(speechService) {
    this.time = 0;
    this.delay = parseInt(localStorage.delay) || 0;
    this._speechService = speechService;
  }

  reset() {
    this.time = 0;
  }

  /**
   * Set time using seconds
   * @param {Number} secs - Time in seconds
   */
  set(secs) {
    this.time = secs;
  }
}
