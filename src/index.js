const validate = require('./validate');
/**
 * Return an array of numbers as a range
 * 
 * @example
 * // returns [0, 1, 2]
 * range(3);
 * 
 * @param {number} number - size of the range
 * @returns {array} - [0, ... number - 1]
 */
const range = number => {
  try {
    validate(number);
    return [...Array(number).keys()];
  } catch (error) {
    throw error;
  }
}

module.exports = range;
