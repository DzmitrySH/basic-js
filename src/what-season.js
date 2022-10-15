const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  if (!date) {
      return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
}

  try {
      date.getMonth()
  } catch {
      throw new Error('Invalid date!')
  }

  const month = date.getMonth();
  const season = Math.floor((month === 11 ? 0 : month + 1) / 3);
  return seasons[season];
}

module.exports = {
  getSeason
};
