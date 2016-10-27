export default class AppPage {
  constructor() {
    browser.get('/');
  }

  navigateToPage(page) {
    this._openMenu();
    element(by.cssContainingText('a', page)).click();
  }

  displays(selector) {
    return element(by.css(selector)).isDisplayed();
  }

  _openMenu() {
    element(by.css('.left-off-canvas-toggle')).click();
    browser.sleep(500);
  }
}
