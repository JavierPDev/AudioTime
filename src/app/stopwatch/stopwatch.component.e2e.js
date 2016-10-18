import StopwatchPage from './stopwatch.component.e2e-page-object';

describe('StopwatchComponent', () => {
  let stopwatchPage;

  beforeEach(() => {
    stopwatchPage = new StopwatchPage();
    stopwatchPage.getPage();
  });

  it('placeholder', () => {
    expect(true).toBe(true);
  });
});
