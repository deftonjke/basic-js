const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes = typeof options.repeatTimes !== 'undefined' ?  options.repeatTimes : 0;
  options.additionRepeatTimes = typeof options.additionRepeatTimes !== 'undefined' ?  options.additionRepeatTimes : 0;
  options.separator = typeof options.separator !== 'undefined' ?  String(options.separator) : '+';
  options.additionSeparator = typeof options.additionSeparator !== 'undefined' ?  String(options.additionSeparator) : '';
  options.addition = typeof options.addition !== 'undefined' ?  String(options.addition) : '';
  let test = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      test.push(str + options.addition);
    }
  
  return test.join(options.separator + options.additionSeparator);
  //return str.repeat(options.repeatTimes) + options.separator + options.addition.repeat(options.additionRepeatTimes) + options.additionSeparator;
};
  