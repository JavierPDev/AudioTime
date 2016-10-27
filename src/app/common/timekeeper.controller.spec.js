import TimekeeperController from './timekeeper.controller';

describe('TimekeeperController', () => {
  let $rootScope;
  let ctrl;
  let timekeeperService;
  let speechService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($filter, $interval, _$rootScope_, $timeout,
      _timekeeperService_, _speechService_) => {
    ctrl = new TimekeeperController($filter, $interval, _$rootScope_.$new(),
        $timeout, _timekeeperService_, _speechService_);
    $rootScope = _$rootScope_;
    speechService = _speechService_;
    timekeeperService = _timekeeperService_;
    jasmine.clock().install();
  }));

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('exists', () => {
    expect(ctrl).toBeDefined();
  });

  describe('start()', () => {
    beforeEach(() => {
      ctrl.start();
    });

    afterEach(() => {
      ctrl.pause();
    });

    it('sets running to true', () => {
      expect(ctrl.running).toBe(true);
    });

    it('sets cleared to false', () => {
      expect(ctrl.cleared).toBe(false);
    });
  });

  describe('pause()', () => {
    it('sets running to false', () => {
      ctrl.start();
      expect(ctrl.running).toBe(true);
      ctrl.pause();
      expect(ctrl.running).toBe(false);
    });
  });

  describe('reset()', () => {
    it('pauses running timer', () => {
      ctrl.start();
      expect(ctrl.running).toBe(true);
      ctrl.pause();
      expect(ctrl.running).toBe(false);
    });

    it('sets time to 0', () => {
      ctrl.start();
      jasmine.clock().tick(1000);
      expect(ctrl.time).not.toBe(0);
      ctrl.pause();
      ctrl.reset();
      expect(ctrl.time).toBe(0);
    });

    it('sets cleared to true', () => {
      ctrl.start();
      expect(ctrl.cleared).toBe(false);
      ctrl.reset();
      expect(ctrl.cleared).toBe(true);
    });
  });

  describe('$onInit', () => {
    describe('voice functionality', () => {
      it('listens for speech when voice is enabled', () => {
        spyOn(speechService, 'listen');
        speechService.setting = 'voice';
        ctrl.$onInit();
        expect(speechService.listen).toHaveBeenCalled();
      });

      it('does not listen for speech when voice is disabled', () => {
        spyOn(speechService, 'listen');
        speechService.setting = 'none';
        ctrl.$onInit();
        expect(speechService.listen).not.toHaveBeenCalled();
      });

      it('listens for event to call start() when voice enabled', () => {
        speechService.setting = 'voice';
        spyOn(ctrl, 'start');
        ctrl.$onInit();
        expect(ctrl.start).not.toHaveBeenCalled();
        $rootScope.$broadcast('recognition.incoming', 'start');
        expect(ctrl.start).toHaveBeenCalled();
      });

      it('listens for event to call pause() when voice enabled', () => {
        speechService.setting = 'voice';
        spyOn(ctrl, 'pause');
        ctrl.$onInit();
        expect(ctrl.pause).not.toHaveBeenCalled();
        $rootScope.$broadcast('recognition.incoming', 'pause');
        expect(ctrl.pause).toHaveBeenCalled();
      });
    });

    beforeEach(() => {
      ctrl.$onInit();
    });

    it('sets time to service time', () => {
      expect(ctrl.time).toBe(timekeeperService.time);
    });

    it('sets cleared to true', () => {
      expect(ctrl.cleared).toBe(true);
    });

    it('sets running to false', () => {
      expect(ctrl.running).toBe(false);
    });
  });

  describe('$onDestroy', () => {
    describe('voice functionality', () => {
      it('calls speechService.stopListening() when voice is enabled', () => {
        spyOn(speechService, 'stopListening');
        speechService.setting = 'voice';
        ctrl.$onInit();
        ctrl.$onDestroy();
        expect(speechService.stopListening).toHaveBeenCalled();
      });

      it('does not call speechService.stopListening() when voice is disabled',
          () => {
        spyOn(speechService, 'stopListening');
        speechService.setting = 'none';
        ctrl.$onInit();
        ctrl.$onDestroy();
        expect(speechService.stopListening).not.toHaveBeenCalled();
      });
    });

    it('sets service time to ctrl time', () => {
      ctrl.time = 6;
      expect(timekeeperService.time).not.toBe(ctrl.time);
      ctrl.$onDestroy();
      expect(timekeeperService.time).toBe(ctrl.time);
    });
  });
});
