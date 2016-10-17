import TimerPage from './timer.component.e2e-page-object';

describe('TimerComponent', () => {
  let timerPage;

  beforeEach(() => {
    timerPage = new TimerPage();
    timerPage.getPage();
  });

  it('stop listening button appears when listen button clicked', () => {
    timerPage.listen();
    expect(timerPage.listenBtn.isPresent()).toBe(false);
    expect(timerPage.stopListeningBtn.isDisplayed()).toBe(true);
  });
  
  it('listen button appears when stop listening button clicked', () => {
    timerPage.listen();
    expect(timerPage.listenBtn.isPresent()).toBe(false);
    timerPage.stopListening();
    expect(timerPage.listenBtn.isDisplayed()).toBe(true);
  });
});
