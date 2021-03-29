const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    this.test.length;
    return this;
  },
  addLink(value) {
		this.test.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    this.test.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.test = this.test.reverse();
    return this;
  },
  finishChain() {
    this.test = this.test.join('~~');
    return this.test;
  },
  'test': [],
};

module.exports = chainMaker;
