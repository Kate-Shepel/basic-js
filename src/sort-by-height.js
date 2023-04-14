const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const indexArray = [];
  // get sorted array without -1
  const sortedArray = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  //get indexes where -1 was located
  arr.forEach((num, index) => {
    if (num === -1) {
      indexArray.push(index);
    }
  });

  //to insert -1 to the place where is was located previously
  indexArray.forEach((index) => {
    sortedArray.splice(index, 0, -1);
  });

  return sortedArray;
}

sortByHeight(arr);

module.exports = {
  sortByHeight
};
