const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  // по строкам матрицы (3)
  for (let i = 0; i < matrix.length; i++) {
    // по столбцам матрицы (4)
    for (let j = 0; j < matrix[i].length; j++) {
      // является ли текущий элемент 1ой строкой матрицы или элементом, который не находится под нулём
      if (i === 0 || matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
