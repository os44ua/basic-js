const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) ==='string'){
    const sa = Number(sampleActivity);
    if (Number.isFinite(sa) && sa > 0 && sa < MODERN_ACTIVITY){
      const k = 0.693 / HALF_LIFE_PERIOD;
      const age = Math.ceil((Math.log(MODERN_ACTIVITY/sa))/k)
      return age;
    }
    return false;
  }
  else
  return false;
  }
module.exports = {
  dateSample
};
