const { NotImplementedError } = require('../lib');

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
  //отбираем только те, что не -1, и сортируем
  const sortedHeights = arr.filter(x => x !== -1).sort((a, b) => a - b);

  let i = 0;
  //проходим по массиву и заменяем все, кроме -1
  return arr.map(x => (x === -1 ? -1 : sortedHeights[i++]));
}

module.exports = {
  sortByHeight
};
