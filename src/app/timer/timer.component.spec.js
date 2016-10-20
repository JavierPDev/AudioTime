describe('TimerComponent', () => {
  let ctrl;
  let scope;
  let voiceService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($rootScope, $componentController, _voiceService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atTimer', {$scope: scope});
    voiceService = _voiceService_;
    ctrl.$onInit();
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });
  });
});
