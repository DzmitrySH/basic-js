const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === null ? 'null' : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let result;

  if (addition !== undefined && additionRepeatTimes === 1) {
    str += addition;
  }

  if (additionRepeatTimes > 1) {
    result = [];
    for (let i = additionRepeatTimes; i > 0; i--) {
      result.push(addition);
    }
    str += result.join(additionSeparator);
  }

  result = [];
  for (let i = repeatTimes; i > 0; i--) {
    result.push(str);
  }
  str = result.join(separator);

  return str;
}

module.exports = {
  repeater
};
