/**
 * validate undefined values parameter
 * @param {string} name the variable name
 */
const isRequired = (name = '') => {
  throw TypeError(`${name} parameter is required`)
}

export default isRequired;
