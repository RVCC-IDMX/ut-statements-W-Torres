/*
 * stmnts-01.js
 * Language: javascript
 * Test: tests/stmnts-01.test.js
 * Path: src/stmnts-01.js
 *
 * Arithmetic
 */

/**
 * Calculates the next integer as if you were counting up by 1
 * @param {integer} int - The integer
 * @returns {integer} - the next integer as if you were counting up by 1
 */
function nextInteger(int = 1) {
  const NextInt = int + 1;
  return NextInt;
}
/**
 * Calculates the product of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The result of the multiplication
 */
function times(a = 2, b = 3) {
  const c = a * b;
  return c;
}

/**
 * Converts the number of minutes into seconds
 * @param {number} minutes - the number of minutes to convert
 * @returns {number} - the number of seconds
 */
function convertMinutesToSeconds(minutes = 5) {
  const seconds = minutes * 60;
  return seconds;
}

/**
 * Converts the number of hours into seconds
 * @param {number} hours - the number of hours to convert
 * @returns {number} - the number of seconds
 */
function convertHoursToSeconds(hours = 2) {
  const Seconds = hours * 60 * 60;
  return Seconds;
}

module.exports = {
  nextInteger,
  times,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};
