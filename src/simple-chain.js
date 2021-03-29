const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    this.cache.length;
    return this;
  },
  addLink(value) {
		this.cache.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    if (this.cache[position - 1] === undefined) {
      this.cache = [];
      throw 'Error';
  }
    this.cache.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.cache = this.cache.reverse();
    return this;
  },
  finishChain() {
    this.links = this.cache.join('~~');
    this.cache = [];
    return this.links;
  },
  'cache': [],
};

module.exports = chainMaker;
