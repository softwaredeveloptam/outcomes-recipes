const { expect } = require("chai");
const { banMethodFrom } = require('../util/tabooUtil.js');
const returnify = require('../util/returnify.js');
const { reverseArray: actualReverseArray } = require("./solution.js");

const reverseArray = banMethodFrom(actualReverseArray, Array, 'reverse');

let retReverseArray = returnify(reverseArray);

describe("reverseArray", () => {

  it("Should throw error for invalid input.", () => {
    expect(() => reverseArray()).to.throw;
    expect(() => reverseArray('str')).to.throw;
    expect(() => reverseArray(5)).to.throw;
    expect(() => reverseArray({})).to.throw;
    expect(() => reverseArray(null)).to.throw;
    expect(() => reverseArray(new Date())).to.throw;
    expect(() => reverseArray('')).to.throw;
  });

  it("Should return nothing.", () => {
    expect(reverseArray([1, 2, 3])).to.be.undefined;
    expect(reverseArray([])).to.be.undefined;
  });

  it("Accepts empty arrays.", () => {
    expect(retReverseArray([])).to.deep.equal([]);
  });

  it("Reverses the original array.", () => {
    let input = [1, 2, 3, 4, 5];
    expect(retReverseArray(input)).to.equal(input);
    expect(input).to.deep.equal([5, 4, 3, 2, 1]);

    input = ['a', 'b', 'c', 'd'];
    expect(retReverseArray(input)).to.equal(input);
    expect(input).to.deep.equal(['d', 'c', 'b', 'a']);
  });

  it("Should not modify or clone nested arrays.", () => {
    let originalItemReferences = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
    let input = originalItemReferences.slice(0);
    expect(retReverseArray(input)).to.equal(input);
    expect(input[0]).to.equal(originalItemReferences[2]);
    expect(input[1]).to.equal(originalItemReferences[1]);
    expect(input[2]).to.equal(originalItemReferences[0]);

    input = [['a', 'b', 'c'], ['d', 'e', 'f']];
    expect(retReverseArray(input)).to.deep.equal([['d', 'e', 'f'], ['a', 'b', 'c']]);
  });
});
