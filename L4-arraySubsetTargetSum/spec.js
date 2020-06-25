const { expect } = require("chai");
const { hasSubsetSum } = require("./solution.js");

describe("hasSubsetSum", () => {
  it("should handle empty sets", () => {
    expect(hasSubsetSum(new Set([]), 1)).to.be.false;
  });

  it("should always return true when the target sum is 0 (because an empty set is always a valid subset).", () => {
    expect(hasSubsetSum([], 0)).to.be.true;
    expect(hasSubsetSum([100, 200], 0)).to.be.true;
  });

  it("should find single-item solutions.", () => {
    expect(hasSubsetSum([4], 1)).to.be.false;
    expect(hasSubsetSum([4], 4)).to.be.true;
    expect(hasSubsetSum([1, 2, 4, 8, 16], 4)).to.be.true;
  });
  
  it("should return false when a solution doesn't exist.", () => {
    expect(hasSubsetSum([2, 4, 6, 8], 7)).to.be.false;
    expect(hasSubsetSum([1, 2, 3, 4, 5], 16)).to.be.false;
    expect(hasSubsetSum([1, 1, 1, 1, 1], 6)).to.be.false;
  });

  it("should find the presence of solutions that only require some elements.", () => {
    expect(hasSubsetSum([1, 1, 1, 1, 1], 4)).to.be.true;
    expect(hasSubsetSum([1, 1, 1, 1, 1], 3)).to.be.true;
    expect(hasSubsetSum([1, 1, 1, 1, 1], 2)).to.be.true;
  });

  it("should handle a pretty large list.", () => {

    // The sum of ALL the numbers from 1 to 100 is 5050.
    // Therefore, if you're properly collapsing all combinations of possibilities
    // as they occur, your lookup table will never exceed 5050 elements.
    // If you are not collapsing, then this will blow up to O(2^5050)

    let allNums = [];
    for (let i = 1; i <= 100; ++i) {
      allNums.push(i);
    }
    let sum = allNums.reduce((a, b) => a + b);
    let targetSum = sum - 10 - 17 - 44 - 50 - 61 - 74 - 77 - 82 - 98;

    expect(hasSubsetSum(allNums, targetSum)).to.be.true;
  });

  it("should find solutions that require all set items.", () => {
    expect(hasSubsetSum([1, 2, 3, 4, 5], 15)).to.be.true;
    expect(hasSubsetSum([1, 1, 1, 1, 1], 5)).to.be.true;
    expect(hasSubsetSum([4], 4)).to.be.true;
  });
});
