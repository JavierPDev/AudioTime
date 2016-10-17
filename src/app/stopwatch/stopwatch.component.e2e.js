import StopwatchPage from './stopwatch.component.e2e-page-object';

describe('StopwatchComponent', () => {
  let stopwatchPage;

  beforeEach(() => {
    stopwatchPage = new StopwatchPage();
    stopwatchPage.getPage();
  });

  it('stop listening button appears when listen button clicked', () => {
    stopwatchPage.listen();
    expect(stopwatchPage.listenBtn.isPresent()).toBe(false);
    expect(stopwatchPage.stopListeningBtn.isDisplayed()).toBe(true);
  });
  
  it('listen button appears when stop listening button clicked', () => {
    stopwatchPage.listen();
    expect(stopwatchPage.listenBtn.isPresent()).toBe(false);
    stopwatchPage.stopListening();
    expect(stopwatchPage.listenBtn.isDisplayed()).toBe(true);
  });
});
