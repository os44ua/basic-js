const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = {};//сколько раз встречалось имя
  const result = [];

  for (const name of names) {
    if (!used[name]) {
      //имя ещё не встречалось
      result.push(name);
      used[name] = 1;
    } else {
      //имя уже было, занчит подбираем следующее уникальное
      let k = used[name];
      let newName = `${name}(${k})`;

      //пока это имя уже существует, увеличиваем суффикс
      while (used[newName]) {
        k++;
        newName = `${name}(${k})`;
      }

      result.push(newName);
      //обновляем счётчики
      used[name] = k + 1;
      used[newName] = 1;
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
