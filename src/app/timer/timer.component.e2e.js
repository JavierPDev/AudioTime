import TimerPage from './timer.component.e2e-page-object';

describe('Timer component', () => {
  let timerPage;

  beforeEach(() => {
    timerPage = new TimerPage();
  });

  it('pause button appears when start button clicked', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(10);
    timerPage.start();
    expect(timerPage.getStartButton().isPresent()).toBe(false);
    expect(timerPage.getPauseButton().isDisplayed()).toBe(true);
  });
  
  it('start button appears when pause button clicked', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(10);
    timerPage.start();
    expect(timerPage.getStartButton().isPresent()).toBe(false);
    timerPage.pause();
    expect(timerPage.getStartButton().isDisplayed()).toBe(true);
  });

  it('entering time updates clock when not running', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(10);
    expect(timerPage.time.getText()).toBe('10:10');
  });

  it('runs down time correctly', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(0);
    timerPage.start();
    browser.sleep(1000);
    expect(timerPage.time.getText()).toBe('9:59');
  });

  it('stops at 0', () => {
    timerPage.enterMin(0);
    timerPage.enterSec(1);
    timerPage.start();
    browser.sleep(2000);
    expect(timerPage.time.getText()).toBe('0:00');
  });

  it('pause works', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(0);
    timerPage.start();
    browser.sleep(1000);
    expect(timerPage.time.getText()).toBe('9:59');
    timerPage.pause();
    browser.sleep(1000);
    expect(timerPage.time.getText()).toBe('9:59');
  });

  it('reset works', () => {
    timerPage.enterMin(10);
    timerPage.enterSec(0);
    timerPage.start();
    browser.sleep(1000);
    expect(timerPage.time.getText()).toBe('9:59');
    timerPage.pause();
    browser.sleep(1000);
    expect(timerPage.time.getText()).toBe('9:59');
    timerPage.reset();
    expect(timerPage.time.getText()).toBe('0:00');
  });
});
