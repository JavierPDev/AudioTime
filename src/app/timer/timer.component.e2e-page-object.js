export default class TimerPage {
  constructor() {
    this.listenBtn = element(by.css('.button.success'));
    this.stopListeningBtn = element(by.css('.button.alert'));
  }

  getPage() {
    browser.get('/#/timer');
  }

  listen() {
    this.listenBtn.click();
  }

  stopListening() {
    this.stopListeningBtn.click();
  }
}
