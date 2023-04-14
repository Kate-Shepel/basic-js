const { NotImplementedError } = require('../extensions/index.js');

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
  // check for wrong input
  if (typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  // to find out the const of the speed of reaction
  const k = 0.693 / HALF_LIFE_PERIOD;
  /* t = ln(N0/N) / k   
  t - возраст образца (age) 
  N0 - современная активность (MODERN_ACTIVITY)
  N - активность образца (sampleActivity) 
  k - константа скорости реакции.*/
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
  
  return age;
}

module.exports = {
  dateSample
};
