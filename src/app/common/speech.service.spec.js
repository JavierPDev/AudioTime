import SpeechService from './speech.service';

describe('Speech service', () => {
  let speechService;

  describe('Class', () => {
    afterEach(() => {
      localStorage.clear();
    });

    it('inits with audio setting if no localStored setting', () => {
      let s = new SpeechService();
      expect(s.setting).toBe('audio');
    });

    it('inits setting with localStored audioVoice if present', () => {
      localStorage.audioVoice = 'voice';
      let s = new SpeechService();
      expect(s.setting).toBe('voice');
    });

    it('inits with interval of 1 if no localStored setting', () => {
      let s = new SpeechService();
      expect(s.interval).toBe(1);
    });

    it('inits with localStored intervalsetting if present', () => {
      localStorage.interval = 5;
      let s = new SpeechService();
      expect(s.interval).toBe(5);
    });
  });

  beforeEach(angular.mock.module('app'));
  beforeEach(inject((_speechService_) => {
    speechService = _speechService_;
  }));

  it('exists', () => {
    expect(speechService).toBeDefined();
  });

  describe('getTimePhrase()', () => {
    it('returns the correct phrase of seconds only', () => {
      expect(speechService.getTimePhrase(50)).toBe(50);
      expect(speechService.getTimePhrase(30)).toBe(30);
      expect(speechService.getTimePhrase(2)).toBe(2);
    });

    it('returns the correct phrase of minute(s) only', () => {
      expect(speechService.getTimePhrase(60)).toBe('1 minute');
      expect(speechService.getTimePhrase(120)).toBe('2 minutes');
      expect(speechService.getTimePhrase(1200)).toBe('20 minutes');
    });

    it('returns correct phrase of minutes and seconds', () => {
      expect(speechService.getTimePhrase(65)).toBe('1:05');
      expect(speechService.getTimePhrase(235)).toBe('3:55');
    });
  });
});

