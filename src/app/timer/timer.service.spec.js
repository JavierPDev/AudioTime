describe('timerService', () => {
  let timerService;

  beforeEach(module('app'));
  beforeEach(inject((_timerService_) => {
    timerService = _timerService_;
  }));

  it('initializes time to 0:00', () => {
    expect(timerService.time).toBe('0:00');
  });

  it('format() should format time properly', () => {
    expect(timerService.format(30)).toBe('0:30');
    expect(timerService.format(60)).toBe('1:00');
    expect(timerService.format(90)).toBe('1:30');
    expect(timerService.format(180)).toBe('3:00');
    expect(timerService.format(2600)).toBe('43:20');
  });

  it('reset() sets time back to 0:00', () => {
    expect(timerService.time).toBe('0:00');
    timerService.set(60);
    expect(timerService.time).toBe('1:00');
    timerService.reset();
    expect(timerService.time).toBe('0:00');
  });

  it('set() sets time using seconds', () => {
    expect(timerService.time).toBe('0:00');
    timerService.set(60);
    expect(timerService.time).toBe('1:00');
    timerService.set(2600);
    expect(timerService.time).toBe('43:20');
  });
});
