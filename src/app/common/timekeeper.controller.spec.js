import TimekeeperController from './timekeeper.controller';

describe('TimekeeperController', () => {
  let $rootScope;
  let ctrl;
  let timekeeperService;
  let voiceService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($filter, $interval, _$rootScope_, $timeout,
      _timekeeperService_, _voiceService_) => {
    ctrl = new TimekeeperController($filter, $interval, _$rootScope_.$new(),
        $timeout, _timekeeperService_, _voiceService_);
    $rootScope = _$rootScope_;
    voiceService = _voiceService_;
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
      it('listens when voice is enabled', () => {
        spyOn(voiceService, 'listen');
        voiceService.setting = 'voice';
        ctrl.$onInit();
        expect(voiceService.listen).toHaveBeenCalled();
      });

      it('does not listen when voice is disabled', () => {
        spyOn(voiceService, 'listen');
        voiceService.setting = 'none';
        ctrl.$onInit();
        expect(voiceService.listen).not.toHaveBeenCalled();
      });

      it('listens for event to call start() when voice enabled', () => {
        voiceService.setting = 'voice';
        spyOn(ctrl, 'start');
        ctrl.$onInit();
        expect(ctrl.start).not.toHaveBeenCalled();
        $rootScope.$broadcast('recognition.incoming', 'start');
        expect(ctrl.start).toHaveBeenCalled();
      });

      it('listens for event to call pause() when voice enabled', () => {
        voiceService.setting = 'voice';
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
      it('calls voiceService.stopListening() when voice is enabled', () => {
        spyOn(voiceService, 'stopListening');
        voiceService.setting = 'voice';
        ctrl.$onInit();
        ctrl.$onDestroy();
        expect(voiceService.stopListening).toHaveBeenCalled();
      });

      it('does not call voiceService.stopListening() when voice is disabled',
          () => {
        spyOn(voiceService, 'stopListening');
        voiceService.setting = 'none';
        ctrl.$onInit();
        ctrl.$onDestroy();
        expect(voiceService.stopListening).not.toHaveBeenCalled();
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
