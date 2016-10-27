export default class TimerPage {
  constructor() {
    browser.get('/timer');
    this.minInput = element(by.model('$ctrl.minInput'));
    this.secInput = element(by.model('$ctrl.secInput'));
    this.time = element(by.css('.clock__display'));
  }

  getStartButton() {
    return element(by.css('.button.success'));
  }

  getPauseButton() {
    return element(by.css('.button.alert'));
  }

  getResetButton() {
    return element(by.css('.button.secondary'));
  }

  start() {
    this.getStartButton().click();
  }

  pause() {
    this.getPauseButton().click();
  }

  reset() {
    this.getResetButton().click();
  }

  enterMin(min) {
    this.minInput.sendKeys(min);
  }

  enterSec(sec) {
    this.secInput.sendKeys(sec);
  }
}
