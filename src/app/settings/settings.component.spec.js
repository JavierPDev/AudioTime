describe('Settings component', () => {
  let ctrl;
  let speechService;
  let stopwatchService;
  let timerService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($rootScope, $componentController, _speechService_,
          _stopwatchService_, _timerService_) => {
    let scope = $rootScope.$new();
    ctrl = $componentController('atSettings', {$scope: scope});
    speechService = _speechService_;
    stopwatchService = _stopwatchService_;
    timerService = _timerService_;
    ctrl.$onInit();
  }));

  it('controller exists', () => {
    expect(ctrl).toBeDefined();
  });

  describe('$onInit()', () => {
    it('loads delay setting from service', () => {
      stopwatchService.delay = 5;
      ctrl.$onInit();
      expect(ctrl.delay).toBe(stopwatchService.delay || timerService.delay);
    });

    it('loads interval setting from service', () => {
      speechService.interval = 10;
      ctrl.$onInit();
      expect(ctrl.interval).toBe(speechService.interval);
    });

    it('loads speech setting from service', () => {
      speechService.setting = 'audio';
      ctrl.$onInit();
      expect(ctrl.audioVoice).toBe(speechService.setting);
    });
  });

  describe('$onDestroy', () => {
    it('saves delay setting to services', () => {
      ctrl.delay = 5;
      ctrl.$onDestroy();
      expect(stopwatchService.delay).toBe(ctrl.delay);
      expect(timerService.delay).toBe(ctrl.delay);
    });

    it('saves interval setting to service', () => {
      ctrl.interval = 10;
      ctrl.$onDestroy();
      expect(speechService.interval).toBe(ctrl.interval);
    });

    it('saves speech setting to service', () => {
      ctrl.audioVoice = 'audio';
      ctrl.$onDestroy();
      expect(speechService.setting).toBe(ctrl.audioVoice);
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('saves delay setting to localStorage', () => {
      ctrl.delay = 5;
      ctrl.$onDestroy();
      expect(localStorage.delay).toBe(ctrl.delay.toString());
    });

    it('saves interval setting to localStorage', () => {
      ctrl.interval = 5;
      ctrl.$onDestroy();
      expect(localStorage.interval).toBe(ctrl.interval.toString());
    });

    it('saves audioVoice setting to localStorage', () => {
      ctrl.audioVoice = 'audio';
      ctrl.$onDestroy();
      expect(localStorage.audioVoice).toBe(ctrl.audioVoice.toString());
    });
  });
});
