const { expect } = require("chai");
const { arrayPermutations } = require("./solution.js");

describe("arrayPermutations", () => {
  it("Throws error for invalid string inputs.", () => {
    expect(() => arrayPermutations(1)).to.throw;
    expect(() => arrayPermutations(null)).to.throw;
    expect(() => arrayPermutations("1")).to.throw;
    expect(() => arrayPermutations({})).to.throw;
  });

  it("Produces expected results with trivial input.", () => {
    expect(arrayPermutations([])).to.deep.equal([]);
    expect(arrayPermutations(["a"])).to.deep.equal([["a"]]);
  });

  it("Function produces expected results with valid input.", () => {

    // stop test if not producing same elements as passed in.
    expect(arrayPermutations(["a"])).to.deep.equal([["a"]]);
    expect(arrayPermutations([1])).to.deep.equal([[1]]);

    // return results in a definitive order
    let wrappedPermute = (arr) => {
      let result = arrayPermutations(arr);
      expect(result).to.be.an('array');
      result.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
      return result;
    };
    
    expect(wrappedPermute([1, 2])).to.deep.equal([[1, 2], [2, 1]]);

    expect(wrappedPermute([1, 2, 3])).to.deep.equal([
      [1, 2, 3], 
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]);

    expect(wrappedPermute(['a', 'b', 'c', 'd'])).to.deep.equal([
      ['a', 'b', 'c', 'd'], 
      ['a', 'b', 'd', 'c'],
      ['a', 'c', 'b', 'd'],
      ['a', 'c', 'd', 'b'],
      ['a', 'd', 'b', 'c'],
      ['a', 'd', 'c', 'b'],
      ['b', 'a', 'c', 'd'], 
      ['b', 'a', 'd', 'c'],
      ['b', 'c', 'a', 'd'],
      ['b', 'c', 'd', 'a'],
      ['b', 'd', 'a', 'c'],
      ['b', 'd', 'c', 'a'],
      ['c', 'a', 'b', 'd'],
      ['c', 'a', 'd', 'b'],
      ['c', 'b', 'a', 'd'],
      ['c', 'b', 'd', 'a'],
      ['c', 'd', 'a', 'b'],
      ['c', 'd', 'b', 'a'],
      ['d', 'a', 'b', 'c'],
      ['d', 'a', 'c', 'b'],
      ['d', 'b', 'a', 'c'],
      ['d', 'b', 'c', 'a'],
      ['d', 'c', 'a', 'b'],
      ['d', 'c', 'b', 'a'],
    ]);
  });
});
