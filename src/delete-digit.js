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
  const numStringed = n.toString();
  let maxNum = 0;
  for (let i = 0; i < numStringed.length; i++) {
    const currentNum = Number(numStringed.slice(0, i) + numStringed.slice(i + 1)); //от начала до i-го индекса не включительно + от i+1 индекса и до конца строки
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
