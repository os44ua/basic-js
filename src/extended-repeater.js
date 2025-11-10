const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
  } = options || {};

  const strPart = String(str);

  // собираем addition-часть, только если addition не равно undefined
  let additionPart = '';
  if (addition !== undefined) {
    const add = String(addition);
    const addTimes = additionRepeatTimes ?? 1; // если не задано , то 1 раз
    additionPart = new Array(addTimes).fill(add).join(additionSeparator);
  }

  //блок = str + additionBlock
  const block = strPart + additionPart;

  //повтор блока нужноек число раз
  const times = repeatTimes ?? 1;
  return new Array(times).fill(block).join(separator);
}

module.exports = {
  repeater
};
