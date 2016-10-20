import StopwatchPage from './stopwatch.component.e2e-page-object';

describe('StopwatchComponent', () => {
  let stopwatchPage;

  beforeEach(() => {
    stopwatchPage = new StopwatchPage();
    stopwatchPage.getPage();
  });

  it('pause button appears when start button clicked', () => {
    stopwatchPage.start();
    expect(stopwatchPage.startButton.isPresent()).toBe(false);
    expect(stopwatchPage.pauseButton.isDisplayed()).toBe(true);
  });
  
  it('start button appears when pause button clicked', () => {
    stopwatchPage.start();
    expect(stopwatchPage.startButton.isPresent()).toBe(false);
    stopwatchPage.pause();
    expect(stopwatchPage.startButton.isDisplayed()).toBe(true);
  });
});
