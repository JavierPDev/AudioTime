describe('TimerComponent', () => {
  let ctrl;
  let scope;
  let timerService;
  let voiceService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($rootScope, $componentController,
          _voiceService_, _timerService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atTimer', {$scope: scope});
    voiceService = _voiceService_;
    timerService = _timerService_;
    ctrl.$onInit();
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });
  });

  describe('$onInit', () => {
    it('inits with same 0 from service when fresh', () => {
      ctrl.$onInit();
      expect(ctrl.time).toBe(timerService.time);
      expect(ctrl.time).toBe(0);
    });

    it('inits with non-zero time from service', () => {
      const newTime = 600;
      timerService.time = newTime;
      ctrl.$onInit();
      expect(ctrl.time).toBe(timerService.time);
      expect(ctrl.time).toBe(newTime);
    });
  });

  describe('$onDestroy', () => {
    it('sets service timer to controller time', () => {
      ctrl.$onDestroy();
      expect(timerService.time).toBe(ctrl.time);
    });
  });

  describe('reset()', () => {
    it('sets time to 0', () => {
      ctrl.time = 600;
      expect(ctrl.time).toBe(600);
      ctrl.reset();
      expect(ctrl.time).toBe(0);
    });

    it('sets inputs to undefined', () => {
      ctrl.minInput = 10;
      ctrl.secInput = 10;
      ctrl.reset();
      expect(ctrl.minInput).toBeUndefined();
      expect(ctrl.secInput).toBeUndefined();
    });
  });

  describe('changeTime()', () => {
    it('changes ctrl time using inputs', () => {
      expect(ctrl.minInput).toBeUndefined();
      expect(ctrl.secInput).toBeUndefined();
      expect(ctrl.time).toBe(0);
      ctrl.minInput = 10;
      ctrl.secInput = 50;
      ctrl.changeTime();
      expect(ctrl.time).toBe(650);
    });
  });
});
