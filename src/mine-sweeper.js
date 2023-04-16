const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newMatrix = [];

  for (let i = 0; i < rows; i++) {
    newMatrix[i] = [];

    for (let j = 0; j < cols; j++) {
      let count = 0;
      // ищем количество мин в соседних ячейках
      // все возможные смещения по вертикали и диагонали от текущей ячейки (x = -1, 0, 1)
      for (let x = -1; x <= 1; x++) {
        // все возможные смещения по горизонтали и диагонали от текущей ячейки (y = -1, 0, 1)
        for (let y = -1; y <= 1; y++) {
          // в пределах ли матрицы ячейки вокруг + исключаем посчёт мины в текущей ячейке
          if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols && (x !== 0 || y !== 0)) {
            if (matrix[i + x][j + y] === true) {
              count += 1;
            } else {
              count += 0;
            }
          }
        }
      }
      newMatrix[i][j] = count;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
