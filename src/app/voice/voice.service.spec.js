describe('VoiceService', () => {
  let VoiceService;

  beforeEach(module('app'));
  beforeEach(inject((_VoiceService_) => {
    VoiceService = _VoiceService_;
  }));

  it('exists', () => {
    expect(VoiceService).toBeDefined();
  });
});

