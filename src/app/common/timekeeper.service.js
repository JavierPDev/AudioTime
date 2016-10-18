export default class TimekeeperService {
  constructor(voiceService) {
    this.time = 0;
    this._voiceService = voiceService;
  }

  reset() {
    this.time = 0;
  }

  /**
   * Format time into minutes and seconds (mm:ss) given seconds
   * @param {Number} secs - Time in seconds
   * @return {String} Time in (mm:ss) format
   */
  format(secs) {
    let mins = Math.floor(secs / 60) || '0';
    let secsBasic = secs - mins * 60;
    let secsLeadingZero = secsBasic.toString().length === 1 
      ? '0' + secsBasic : secsBasic;
    let secsFinal = secsLeadingZero ? secsLeadingZero : '00';
    return `${mins}:${secsFinal}`;
  }

  /**
   * Set time using seconds
   * @param {Number} secs - Time in seconds
   */
  set(secs) {
    this.time = secs;
  }
}
