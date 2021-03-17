const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (!Array.isArray(members)) {
  	return false;
  } else {
  	for (let i = 0; i < members.length; i++) {
    	if (typeof members[i] === 'string') {
      	let trimedStr = members[i].trim();
      	result.push(trimedStr[0].toUpperCase());
      }
    }
  }
    return result.sort().join('');
};
