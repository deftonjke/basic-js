const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counts = 0;
    matrix.forEach((element) => {
  		element.forEach((subelement) => {
        (subelement == '^^') ? counts +=  1 : counts += 0;
      })
})
    return counts;
};
