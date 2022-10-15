const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let resultArr = [];
  let numberStr = n + '';

  for (let i = 0; i < numberStr.length; i++) {
    resultArr.push(numberStr.slice(0, i) + numberStr.slice(i + 1));
  }

  return Math.max.apply(null, (resultArr.map(subarr => +subarr)));
}

module.exports = {
  deleteDigit
};
