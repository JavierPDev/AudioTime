export default class StopwatchPage {
  constructor() {
    this.startButton = element(by.css('.button.success'));
    this.pauseButton = element(by.css('.button.alert'));
  }

  getPage() {
    browser.get('/#/stopwatch');
  }

  start() {
    this.startButton.click();
  }

  pause() {
    this.pauseButton.click();
  }
}
