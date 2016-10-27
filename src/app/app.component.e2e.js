import AppPage from './app.component.e2e-page-object';

describe('App component', () => {
  let appPage;

  beforeEach(() => {
    appPage = new AppPage();
  });

  it('is able to navigate to timer', () => {
    appPage.navigateToPage('Timer');
    expect(appPage.displays('.clock')).toBe(true);
  });

  it('is able to navigate to stopwatch', () => {
    appPage.navigateToPage('Stopwatch');
    expect(appPage.displays('.clock')).toBe(true);
  });

  it('is able to navigate to settings', () => {
    appPage.navigateToPage('Settings');
    expect(appPage.displays('.settings-form')).toBe(true);
  });

  it('is able to navigate to about', () => {
    appPage.navigateToPage('About');
    expect(appPage.displays('h3')).toBe(true);
  });
});
