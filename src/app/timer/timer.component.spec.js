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
  });
});
