const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let result = 0;
  matrix.forEach(arr => {
      arr.forEach(element => {
          typeof element === 'string' && element.length == 2 && element.includes('^^') ? result += 1 : null;
      })
  });
  return result;
}

module.exports = {
  countCats
};
