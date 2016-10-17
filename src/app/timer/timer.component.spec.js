describe('TimerComponent', () => {
  let ctrl;
  let scope;
  let timerService;

  beforeEach(module('app'));
  beforeEach(inject(($rootScope, $componentController, _timerService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atTimer', {$scope: scope});
    timerService = _timerService_;
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });

    it('intantiates time as timerService\'s time', () => {
      expect(ctrl.time).toBe(timerService.time);
    });
  });
});
