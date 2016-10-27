export default class SettingsPage {
  constructor() {
    browser.get('/settings');
  }

  navigateAway() {
    element(by.css('.left-off-canvas-toggle')).click();
    browser.sleep(500);
    element(by.cssContainingText('a', 'About')).click();
  }

  selectNone() {
    element(by.cssContainingText('option', 'None')).click();
  }

  selectAudio() {
    element(by.cssContainingText('option', 'Audio')).click();
  }

  selectInterval5() {
    element(by.cssContainingText('option', '5 seconds')).click();
  }

  enterDelay(secs) {
    element(by.model('$ctrl.delay')).sendKeys(secs);
  }

  getLocalStoredDelay() {
    return browser.executeScript(
      "return window.localStorage.getItem('delay');"
    );
  }

  getLocalStoredInterval() {
    return browser.executeScript(
      "return window.localStorage.getItem('interval');"
    );
  }

  getLocalStoredAudioVoice() {
    return browser.executeScript(
      "return window.localStorage.getItem('audioVoice');"
    );
  }
}

