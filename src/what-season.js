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
  try {
    if (arguments.length === 0) {
      return 'Unable to determine the time of year!';
    }
    if (date.hasOwnProperty('toString')) {
      throw new Error('Invalid date!');
    }

    const month = date.getMonth() + 1; // because getMonth() returns a zero-based index
  
    if (month === 12 || month === 1 || month === 2) {
      return "winter";
    } else if (month === 3 || month === 4 || month === 5) {
      return "spring";
    } else if (month === 6 || month === 7 || month === 8) {
      return "summer";
    } else if (month === 9 || month === 10 || month === 11) {
      return "autumn";
    } else {
      // Return an error message if the date is not correct
      return "Invalid date!";
    }
  } catch (error) {
  throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
