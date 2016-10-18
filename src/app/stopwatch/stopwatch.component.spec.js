describe('StopwatchComponent', () => {
  let ctrl;
  let scope;
  let stopwatchService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($rootScope, $componentController, _stopwatchService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atStopwatch', {$scope: scope});
    stopwatchService = _stopwatchService_;
    ctrl.$onInit();
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });
  });
});

