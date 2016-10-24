import TimerPage from './timer.component.e2e-page-object';

describe('TimerComponent', () => {
  let timerPage;

  beforeEach(() => {
    timerPage = new TimerPage();
    timerPage.enterMin(10);
    timerPage.enterSec(10);
  });

  it('pause button appears when start button clicked', () => {
    timerPage.start();
    expect(timerPage.startButton.isPresent()).toBe(false);
    expect(timerPage.pauseButton.isDisplayed()).toBe(true);
  });
  
  it('start button appears when pause button clicked', () => {
    timerPage.start();
    expect(timerPage.startButton.isPresent()).toBe(false);
    timerPage.pause();
    expect(timerPage.startButton.isDisplayed()).toBe(true);
  });
});
