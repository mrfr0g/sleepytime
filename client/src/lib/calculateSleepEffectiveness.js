/**
 * Converts a time slot duration into a number of minutes
 * @param {String} timeSlot "01h:30m"
 * @returns Number
 */
function getDuration(timeSlot) {
  const splitSlot = timeSlot.split(':');
  const hours = parseInt(splitSlot[0], 10);
  const minutes = parseInt(splitSlot[1], 10);

  return hours * 60 + minutes;
}

/**
 * Calculates sleep effectiveness using our proven formula
 * @param {Number} durationAsleep
 * @param {Number} durationInBed
 * @returns Percent
 */
export function calculateSleepEffectiveness(durationAsleep, durationInBed) {
  console.log(
    'Calculating sleep effectiveness... asleep / in bed',
    durationAsleep,
    durationInBed
  );
  const durationAsleepInMinutes = getDuration(durationAsleep);
  const durationInBedInMinutes = getDuration(durationInBed);

  console.log(
    'Determined asleep/inbed minutes as',
    durationAsleepInMinutes,
    durationInBedInMinutes
  );

  return 100 * (durationAsleepInMinutes / durationInBedInMinutes);
}
