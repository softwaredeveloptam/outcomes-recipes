const { expect, use } = require("chai");
const { spy } = require("sinon");
const sinonChai = require("sinon-chai");
const returnify = require("../util/returnify.js");
const { insertionSort: actualInsertionSort } = require("./solution.js");

const insertionSort = returnify(actualInsertionSort);

use(sinonChai);

describe("Insertion Sort", () => {
  // spy on native methods
  beforeEach(() => {
    spy(Array.prototype, "sort");
  });

  // stop spying on native methods
  afterEach(() => {
    expect(Array.prototype.sort).not.to.have.been.called;
    Array.prototype.sort.restore();
  });

  it("should sort the array", () => {
    expect(insertionSort([2, 1])).to.eql([1, 2]);
    expect(insertionSort([2, 1, 3])).to.eql([1, 2, 3]);
  });

  it("should return the sorted array which contains negative numbers", () => {
    expect(insertionSort([-1, 1, 3])).to.eql([-1, 1, 3]);
    expect(insertionSort([2, -1, 3])).to.eql([-1, 2, 3]);
  });

  // TODO: add a bigger list
});
