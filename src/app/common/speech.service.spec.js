describe('speechService', () => {
  let speechService;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject((_speechService_) => {
    speechService = _speechService_;
  }));

  it('exists', () => {
    expect(speechService).toBeDefined();
  });
});

