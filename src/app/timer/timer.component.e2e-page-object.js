export default class TimerPage {
  constructor() {
    this.startButton = element(by.css('.button.success'));
    this.pauseButton = element(by.css('.button.alert'));
  }

  getPage() {
    browser.get('/#/timer');
  }

  start() {
    this.startButton.click();
  }

  pause() {
    this.pauseButton.click();
  }
}
