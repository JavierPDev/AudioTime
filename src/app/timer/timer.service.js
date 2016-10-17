export default class TimerService {
  constructor() {
    this.time = this.format(0);
  }

  reset() {
    this.time = this.format(0);
  }

  /**
   * Format time into minutes and seconds (mm:ss) given seconds
   * @param {Number} secs - Time in seconds
   * @return {String} Time in (mm:ss) format
   */
  format(secs) {
    let mins = Math.floor(secs / 60) || '0';
    let secsBasic = secs - mins * 60;
    let secsLeadingZero = secsBasic.length === 1 ? '0' + secsBasic : secsBasic;
    if (!secsLeadingZero) {
      secsLeadingZero = '00';
    }
    return `${mins}:${secsLeadingZero}`;
  }

  /**
   * Set time using seconds
   * @param {Number} secs - Time in seconds
   */
  set(secs) {
    this.time = this.format(secs);
  }
}

