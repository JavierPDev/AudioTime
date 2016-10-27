import StopwatchPage from './stopwatch.component.e2e-page-object';

describe('Stopwatch component', () => {
  let stopwatchPage;

  beforeEach(() => {
    stopwatchPage = new StopwatchPage();
  });

  it('pause button appears when start button clicked', () => {
    stopwatchPage.start();
    expect(stopwatchPage.getStartButton().isPresent()).toBe(false);
    expect(stopwatchPage.getPauseButton().isDisplayed()).toBe(true);
  });
  
  it('start button appears when pause button clicked', () => {
    stopwatchPage.start();
    expect(stopwatchPage.getStartButton().isPresent()).toBe(false);
    stopwatchPage.pause();
    expect(stopwatchPage.getStartButton().isDisplayed()).toBe(true);
  });

  it('keeps time', () => {
    stopwatchPage.start();
    browser.sleep(2000);
    expect(stopwatchPage.time.getText()).toBe('0:02');
  });

  it('pause works', () => {
    stopwatchPage.start();
    browser.sleep(1000);
    stopwatchPage.pause();
    browser.sleep(1000);
    expect(stopwatchPage.time.getText()).toBe('0:01');
  });

  it('reset works', () => {
    stopwatchPage.start();
    browser.sleep(1000);
    stopwatchPage.pause();
    browser.sleep(1000);
    expect(stopwatchPage.time.getText()).toBe('0:01');
    stopwatchPage.reset();
    expect(stopwatchPage.time.getText()).toBe('0:00');
  });
});
