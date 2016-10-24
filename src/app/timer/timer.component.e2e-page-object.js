export default class TimerPage {
  constructor() {
    browser.get('/timer');
    this.startButton = element(by.css('.button.success'));
    this.pauseButton = element(by.css('.button.alert'));
    this.minInput = element(by.model('$ctrl.minInput'));
    this.secInput = element(by.model('$ctrl.secInput'));
  }

  start() {
    this.startButton.click();
  }

  pause() {
    this.pauseButton.click();
  }

  enterMin(min) {
    this.minInput.sendKeys(min);
  }

  enterSec(sec) {
    this.secInput.sendKeys(sec);
  }
}
