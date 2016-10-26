export default class TimekeeperService {
  constructor(voiceService) {
    this.time = 0;
    this.delay = parseInt(localStorage.delay) || 0;
    this._voiceService = voiceService;
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
