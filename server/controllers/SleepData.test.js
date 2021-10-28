const { saveSleepData } = require('./SleepData');

describe('SleepData', () => {
  describe('Saving data', () => {
    it('returns the index of the saved data', () => {
      const result1 = saveSleepData({
        foo: 1,
        bar: 1,
      });

      const result2 = saveSleepData({
        foo: 1,
        bar: 1,
      });

      expect(result1).toEqual(0);
      expect(result2).toEqual(1);
    });
  });
});
