import { TimekeeperService } from './';

describe('Timekeeper superclass', () => {
  let timekeeper;

  beforeEach(() => {
    timekeeper = new TimekeeperService();
  });

  it('initializes time to 0', () => {
    expect(timekeeper.time).toBe(0);
  });

  it('format() should format time properly', () => {
    expect(timekeeper.format(30)).toBe('0:30');
    expect(timekeeper.format(60)).toBe('1:00');
    expect(timekeeper.format(65)).toBe('1:05');
    expect(timekeeper.format(90)).toBe('1:30');
    expect(timekeeper.format(180)).toBe('3:00');
    expect(timekeeper.format(2600)).toBe('43:20');
  });

  it('reset() sets time back to 0', () => {
    expect(timekeeper.time).toBe(0);
    timekeeper.set(60);
    expect(timekeeper.time).toBe(60);
    timekeeper.reset();
    expect(timekeeper.time).toBe(0);
  });
});

