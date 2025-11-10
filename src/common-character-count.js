const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};

  for (const ch of s1) {
    count1[ch] = (count1[ch] || 0) + 1;
  }
  for (const ch of s2) {
    count2[ch] = (count2[ch] || 0) + 1;
  }

  let common = 0;
  for (const ch in count1) {
    if (count2[ch]) {
      common += Math.min(count1[ch], count2[ch]);
    }
  }

  return common;
}


module.exports = {
  getCommonCharacterCount
};
