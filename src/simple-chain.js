const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    const str = (arguments.length === 0) ? '' : String(value);
    this._chain.push(`( ${str} )`);
    return this; //chainable
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this._chain.length) {
      //при ошибке очистить состояние и бросить Error
      this._chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._chain.splice(position - 1, 1);
    return this; //chainable
  },

  reverseChain() {
    this._chain.reverse();
    return this; //chainable
  },

  finishChain() {
    const result = this._chain.join('~~');
    this._chain = []; //сбросить как после ошибки
    return result;
  },
};

module.exports = {
  chainMaker,
};
