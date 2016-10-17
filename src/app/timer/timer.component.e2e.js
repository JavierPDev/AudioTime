import TimerPage from './timer.component.e2e-page-object';

describe('TimerComponent', () => {
  let timerPage;

  beforeEach(() => {
    timerPage = new TimerPage();
    timerPage.getPage();
  });

  it('placeholder', () => {
    expect(true).toBe(true);
  });
});
