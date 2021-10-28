import { calculateSleepEffectiveness } from './calculateSleepEffectiveness';

describe('calculateSleepEffectiveness', () => {
  it('returns the expected value', () => {
    const sleepDuration = '01h:30m';
    const bedDuration = '00h:30m';
    const result = calculateSleepEffectiveness(sleepDuration, bedDuration);

    expect(result).toEqual(300);
  });
});
