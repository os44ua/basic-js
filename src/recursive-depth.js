const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //eсли это не массив -глубина 0
    if (!Array.isArray(arr)) return 0;

    let maxDepth = 1;

    for (const item of arr) {
      if (Array.isArray(item)) {
        const childDepth = 1 + this.calculateDepth(item);
        if (childDepth > maxDepth) maxDepth = childDepth;
      }
    }

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
