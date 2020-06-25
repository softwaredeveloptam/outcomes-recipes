const { expect } = require("chai");
const { arrayBinarySearch } = require("./solution.js");

describe("arrayBinarySearch", () => {
  it("Handles an empty array", () => {
    expect(arrayBinarySearch([], 42)).to.be.false;
  });

  it("Handles a single-item array", () => {
    expect(arrayBinarySearch([42], 42)).to.be.true;
    expect(arrayBinarySearch([55], 42)).to.be.false;
  });

  it("Handles several numbers", () => {
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 2)).to.be.true;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 11)).to.be.true;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 17)).to.be.true;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 12)).to.be.false;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 10)).to.be.false;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 1)).to.be.false;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], -10)).to.be.false;
    expect(arrayBinarySearch([2, 3, 5, 7, 11, 13, 17], 20)).to.be.false;
  });
  
  it("Handles a big ol' array", () => {
    let bigOlArray = [];
    for (let i = 0; i < 10000; ++i) {
      bigOlArray.push(i * 3 + 17);
    }
    expect(arrayBinarySearch(bigOlArray.slice(0), 20)).to.be.true;
    expect(arrayBinarySearch(bigOlArray.slice(0), 2468 * 3 + 17)).to.be.true;
    expect(arrayBinarySearch(bigOlArray.slice(0), 6000)).to.be.false; // even numbers won't be in there.
  });
});
