
/**
 * If not true, the validation fails
 */
const CONDITIONS = [
  input => typeof input === 'number',
  input => input !== NaN,
];

/**
 * Validate the function input
 * @param {*} input 
 */
const validate = (input) => {
  CONDITIONS.forEach(condition => {
    if (!condition(input)) {
      // It does not validate
      throw new Error(`Can not create a range from value ${input} with type ${typeof input}`);
    }
  })
};

module.exports = validate;
