import TimekeeperController from './timekeeper.controller';

describe('TimekeeperController', () => {
  let ctrl;
  let timekeeperService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($filter, $interval, $rootScope, $timeout,
      _timekeeperService_, voiceService) => {
    ctrl = new TimekeeperController($filter, $interval, $rootScope.$new(),
        $timeout, _timekeeperService_, voiceService);
    timekeeperService = _timekeeperService_;
  }));

  it('exists', () => {
    expect(ctrl).toBeDefined();
  });
});
