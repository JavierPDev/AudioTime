import { TimekeeperService } from './';

describe('Timekeeper superclass', () => {
  let timekeeper;

  beforeEach(() => {
    timekeeper = new TimekeeperService();
  });

  it('initializes time to 0', () => {
    expect(timekeeper.time).toBe(0);
  });

  it('initializes delay to 0', () => {
    expect(timekeeper.delay).toBe(0);
  });

  it('reset() sets time back to 0', () => {
    expect(timekeeper.time).toBe(0);
    timekeeper.set(60);
    expect(timekeeper.time).toBe(60);
    timekeeper.reset();
    expect(timekeeper.time).toBe(0);
  });
});

