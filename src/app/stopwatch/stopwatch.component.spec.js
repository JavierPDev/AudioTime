describe('StopwatchComponent', () => {
  let ctrl;
  let scope;
  let VoiceService;

  beforeEach(module('app'));
  beforeEach(inject(($rootScope, $componentController, _VoiceService_) => {
    scope = $rootScope.$new();
    ctrl = $componentController('atStopwatch', {$scope: scope});
    VoiceService = _VoiceService_;
  }));

  describe('controller', () => {
    it('exists', () => {
      expect(ctrl).toBeDefined();
      expect(scope).toBeDefined();
    });

    it('intantiates as not listening', () => {
      expect(ctrl.listening).toBe(false);
    });

    it('listen() sets ctrl.listening to true', () => {
      // Inits with false
      expect(ctrl.listening).toBe(false);
      ctrl.listen();
      expect(ctrl.listening).toBe(true);
    });

    it('stopListening() sets ctrl.listening to false', () => {
      // Manually change to true since inits false
      ctrl.listening = true;
      expect(ctrl.listening).toBe(true);
      ctrl.stopListening();
      expect(ctrl.listening).toBe(false);
    });
  });
});
