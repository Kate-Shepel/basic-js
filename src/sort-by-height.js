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

arr = [-1, 150, 190, 170, -1, -1, 160, 180]

function sortByHeight(arr) {
  const indexArray = [];
  const sortedArray = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  console.log(sortedArray);

  arr.forEach((num, index) => {
    if (num === -1) {
      indexArray.push(index);
    }
  });

  console.log(indexArray);

  indexArray.forEach((index) => {
    sortedArray.splice(index, 0, -1);
  });

  return sortedArray;
}

sortByHeight(arr);

module.exports = {
  sortByHeight
};
