describe('voiceService', () => {
  let voiceService;

  beforeEach(module('app'));
  beforeEach(inject((_voiceService_) => {
    voiceService = _voiceService_;
  }));

  it('exists', () => {
    expect(voiceService).toBeDefined();
  });
});

