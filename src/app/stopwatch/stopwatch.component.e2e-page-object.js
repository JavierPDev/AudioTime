export default class StopwatchPage {
  constructor() {
    this.listenBtn = element(by.css('.button.success'));
    this.stopListeningBtn = element(by.css('.button.alert'));
  }

  getPage() {
    browser.get('/#/stopwatch');
  }

  listen() {
    this.listenBtn.click();
  }

  stopListening() {
    this.stopListeningBtn.click();
  }
}
