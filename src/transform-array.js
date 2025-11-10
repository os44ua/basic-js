const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
 if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  const CMD_DISCARD_NEXT = '--discard-next';
  const CMD_DISCARD_PREV = '--discard-prev';
  const CMD_DOUBLE_NEXT  = '--double-next';
  const CMD_DOUBLE_PREV  = '--double-prev';
  const isCmd = (x) => x === CMD_DISCARD_NEXT || x === CMD_DISCARD_PREV || x === CMD_DOUBLE_NEXT || x === CMD_DOUBLE_PREV;

  // индекс, который был удалён командой '--discard-next'
  let skippedIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr === CMD_DISCARD_NEXT) {
      // пропускаем следующий элемент
      if (i + 1 < arr.length) {
        skippedIndex = i + 1;
        i += 1; // перескочим через следующий
      }
      continue;
    }

    if (curr === CMD_DISCARD_PREV) {
      // удалить предыдущий, если он реально был добавлен и не был ранее удалён
      if (res.length > 0 && i - 1 !== skippedIndex) {
        res.pop();
      }
      continue;
    }

    if (curr === CMD_DOUBLE_NEXT) {
      // продублировать следующий, если он существует и это не команда
      if (i + 1 < arr.length && !isCmd(arr[i + 1])) {
        res.push(arr[i + 1]);
      }
      continue;
    }

    if (curr === CMD_DOUBLE_PREV) {
      // продублировать предыдущий, если он существует и не был удалён discard-next
      if (i - 1 >= 0 && i - 1 !== skippedIndex && !isCmd(arr[i - 1])) {
        res.push(arr[i - 1]);
      }
      continue;
    }

    // обычное значение — просто добавить
    res.push(curr);
  }

  return res;
}

module.exports = {
  transform
};
