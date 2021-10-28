// Stores an array of sleep data models
/**
 * {
 *   "inBedDuration": Number,
 *   "inSleepDuration": Number,
 *   "result": Number
 * }
 */
const sleepDataStore = [];

/**
 * Saves sleep data to the store
 * @param {Object} _sleepData
 * @returns {Number} identifier of data in store
 */
function saveSleepData(_sleepData) {
  const sleepData = _sleepData || {};
  sleepDataStore.push(sleepData);

  return sleepDataStore.length - 1;
}

/**
 * Returns the sleep data instance at index
 * @param {Number} index
 * @returns SleepData instance
 */
function getSleepDataByIndex(index) {
  return sleepDataStore[index];
}

/**
 * Returns all of the sleep data instances
 * @returns Array
 */
function listSleepData() {
  return sleepDataStore;
}

module.exports = {
  saveSleepData,
  getSleepDataByIndex,
  listSleepData,
};
