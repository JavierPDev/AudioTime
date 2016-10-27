import SettingsPage from './settings.component.e2e-page-object';

describe('settings component', () => {
  let settingsPage;

  beforeEach(() => {
    settingsPage = new SettingsPage();
  });
  
  it('saves delay option to localStorage', () => {
    settingsPage.enterDelay(0);
    settingsPage.navigateAway();
    expect(settingsPage.getLocalStoredDelay()).toBe('0');
  });

  it('saves interval option to localStorage', () => {
    settingsPage.selectInterval5();
    settingsPage.navigateAway();
    expect(settingsPage.getLocalStoredInterval()).toBe('5');
  });

  it('saves audio/voice option to localStorage', () => {
    settingsPage.selectNone();
    settingsPage.navigateAway();
    expect(settingsPage.getLocalStoredAudioVoice()).toBe('none');
  });
});
