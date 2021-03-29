const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'Error';
  }
 	let newArr = arr.slice();
  let test = [];

  for (let i = 0; i < newArr.length; i++) {
  	if (newArr[i] === '--discard-next') {
    	newArr.splice(i+1, 1);
      i++;
    } else if (newArr[i] === '--discard-prev') {
      	test.splice(i - 1, 1);
    } else if (newArr[i] === '--double-prev') {
    	if (newArr[i - 1] === undefined) {
      console.log('undefined');
      } else {
        test.push(newArr[i - 1]);
      }
    } else if (newArr[i] === '--double-next') {
    	if (newArr[i + 1] === undefined) {
      	//newArr.splice(i, 1);
      } else {
        test.push(newArr[i+1]);
      }
    } else {
    	test.push(newArr[i]);
    }
  }
  return test;
  
};