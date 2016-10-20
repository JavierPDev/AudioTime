export default class TimerPage {
  constructor() {
    browser.get('/timer');
    this.startButton = element(by.css('.button.success'));
    this.pauseButton = element(by.css('.button.alert'));
    this.minInput = element(by.model('$ctrl.minInput'));
    this.secInput = element(by.model('$ctrl.secInput'));

    // Enable button by entering numbers
    this.minInput.sendKeys('00');
    this.secInput.sendKeys('30');
  }

  start() {
    this.startButton.click();
  }

  pause() {
    this.pauseButton.click();
  }
}
