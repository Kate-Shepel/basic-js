const { NotImplementedError } = require('../extensions/index.js');

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
    // set default values for option types
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = options.addition !== undefined ? options.addition : '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
  
    // convert str and addition to string in case they are not
    str = String(str);
    addition = String(addition);
  
    // to define addition str
    let additionStr = '';
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionStr += addition;
      if (i < additionRepeatTimes) {
        additionStr += additionSeparator;
      }
    }
  
    // repeat str + additionStr
    let result = '';
    for (let i = 1; i <= repeatTimes; i++) {
      result += str + additionStr;
      if (i < repeatTimes) {
        result += separator;
      }
    }
  
    return result;
}

module.exports = {
  repeater
};
