export default class StopwatchPage {
  constructor() {
    browser.get('/stopwatch');
    this.startButton = element(by.css('.button.success'));
    this.pauseButton = element(by.css('.button.alert'));
  }

  start() {
    this.startButton.click();
  }

  pause() {
    this.pauseButton.click();
  }
}
