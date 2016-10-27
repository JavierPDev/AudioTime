export default class StopwatchPage {
  constructor() {
    browser.get('/stopwatch');
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
}
