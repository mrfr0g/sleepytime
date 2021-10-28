import React from 'react';
import { DateTime } from 'luxon';
import { Select } from 'grommet';

/**
 * Returns a formatted string for the time object
 * @param {DateTime} time
 * @returns {String}
 */
function formatTimeSlot(time) {
  return `${time.toFormat('HH')}h:${time.toFormat('mm')}m`;
}

/**
 * Returns a list of time slots in minute increments
 * @param {Number} increments
 * @returns {Array} ["0h:30m", "1h:00m"]
 */
function getTimeSlots(increments = 30) {
  const slots = [];

  // Using Luxon here to calculate time from midnight, this may be a bit
  // more than we need, but it lets us easily deal with date math and
  // support more increments in the future
  let now = DateTime.fromISO('2021-01-01');

  // Generate slots until we reach the max hours per day
  while (now.toFormat('H') <= 23) {
    now = now.plus({
      minutes: increments,
    });

    // Break if we move past today
    if (now.toFormat('dd') !== '01') {
      break;
    }

    slots.push(formatTimeSlot(now));
  }

  return slots;
}

/**
 * Creates a dropdown with timestamps from 0-24 hours, in 30m increments (default)
 * @prop {Number} increments
 */
export function DurationDropDown({ increments = 30, ...props }) {
  const slots = getTimeSlots(increments);

  return <Select options={slots} {...props} />;
}
