export default function formatTimeFilter() {
  /**
   * Format time into minutes and seconds (mm:ss) given seconds
   * @param {Number} time - Time in seconds
   * @return {String} Time in (mm:ss) format
   */
  return (time) => {
    if (!time) return '0:00';
    let mins = Math.floor(time / 60) || '0';
    let secsBasic = time - mins * 60;
    let secsLeadingZero = secsBasic.toString().length === 1 
      ? '0' + secsBasic : secsBasic;
    let secsFinal = secsLeadingZero ? secsLeadingZero : '00';
    return `${mins}:${secsFinal}`;
  };
}
