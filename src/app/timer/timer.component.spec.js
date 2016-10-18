describe('TimerComponent', () => {
  let ctrl;
  let scope;
  let timerService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($rootScope, $componentController, _timerService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atTimer', {$scope: scope});
    timerService = _timerService_;
    ctrl.$onInit();
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });

    it('intantiates time as timerService\'s time', () => {
      expect(ctrl.time).toBe(timerService.time);
    });

    it('setTime() sets time using seconds as input', () => {
      ctrl.setTime(30);
      expect(ctrl.time).toBe('0:30');
      ctrl.setTime(60);
      expect(ctrl.time).toBe('1:00');
      ctrl.setTime(90);
      expect(ctrl.time).toBe('1:30');
      ctrl.setTime(180);
      expect(ctrl.time).toBe('3:00');
      ctrl.setTime(2600);
      expect(ctrl.time).toBe('43:20');
    });

    it('$onDestroy() sets TimerService time to component time', () => {
      ctrl.setTime(30);
      expect(ctrl.time).toBe('0:30');
      ctrl.$onDestroy();
      expect(timerService.time).toBe('0:30');
    });
  });
});
