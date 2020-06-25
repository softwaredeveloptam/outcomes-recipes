const { expect, use } = require("chai");
const { spy } = require("sinon");
const sinonChai = require("sinon-chai");

use(sinonChai);

/*
  Because Chai uses many built-in methods through the course of its
  normal operation, certain methods cannot be banned using beforeEach
  and afterEach hooks. This wrapper will ban a method right before
  user code execution and then un-ban it, so things like expect() will
  not cause a false positive. Array.reverse(), for example.
*/
const banMethodFrom = (fn, fnOrMethodBase, optMethodName) => {
  return function() {
    let args = [];
    for (let i = 0; i < arguments.length; ++i) {
      args.push(arguments[i]);
    }

    let base = null;
    let name = null;
    let bannedFn = null;
    if (optMethodName === undefined) {
      bannedFn = fnOrMethodBase;
      base = this;
      name = fnOrMethodBase.name;
    } else {
      base = fnOrMethodBase.prototype;
      name = optMethodName;
    }
    spy(base, name);
    try {
      return fn.apply(this, args);
    } finally {
      try {
        expect(base[name]).not.to.have.been.called;
      } finally {
        base[name].restore();
      }
    }
  };
};

module.exports = {
  banMethodFrom,
};
