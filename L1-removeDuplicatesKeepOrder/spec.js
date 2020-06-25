const { expect } = require("chai");
const { removeDuplicates } = require("./solution.js")

describe("removeDuplicates", () => {
  it("Throws error for non-array input.", () => {
    expect(() => removeDuplicates(null)).to.throw;
    expect(() => removeDuplicates(42)).to.throw;
    expect(() => removeDuplicates({})).to.throw;
    expect(() => removeDuplicates("I'm an array, trust me!")).to.throw;
  });

  it("Throws error for invalid items.", () => {
    expect(() => removeDuplicates([1, null, 1])).to.throw;
    expect(() => removeDuplicates([1, [1], 1])).to.throw;
    expect(() => removeDuplicates([1, {}, 1])).to.throw;
    expect(() => removeDuplicates([1, undefined, 1])).to.throw;
    expect(() => removeDuplicates([1, new Date(), 1])).to.throw;
  });

  it("Handles empty array.", () => {
    expect(removeDuplicates([])).to.deep.equal([]);
  });

  it("Handles very big arrays.", () => {
    let arr = [];
    for (let i = 0; i < 100000; ++i) {
      arr.push('meow');
    }

    let output = removeDuplicates(arr);
    expect(output.length).to.equal(1); // prevent catastrophically large error messages
    expect(output).to.deep.equal(['meow']);
  });

  it("Should remove duplicates and keep order", () => {
    expect(removeDuplicates([1, 2, 3, 2, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates([1, 2, 3, 2, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates(['aaa', 'AAA', 'bbb', 'ccc', 'aaa', 'aaa'])).to.deep.equal(['aaa', 'AAA', 'bbb', 'ccc']);
    expect(removeDuplicates([true, false, true, false])).to.deep.equal([true, false]);
    
    // lookups should handle falsy values
    expect(removeDuplicates([0, 0, 0, 0])).to.deep.equal([0]);

    let input = [
      false, true, false, true, 
      0, 1, 0, 1, 
      "0", "1", "0", "1", 
      "false", "true", "maybe", "probably",
      "banana", "banana", "apricot", "GOOSE",
      ""];
    let expected = [
      false, true,
      0, 1,
      "0", "1",
      "false", "true", "maybe", "probably",
      "banana", "apricot", "GOOSE",
      ""];
    let output = removeDuplicates(input);
    expect(output).to.deep.equal(expected);
    expect(output).to.not.equal(input);
  });

  it ("Should not modify the input and return a new instance", () => {
    let arr = [100];
    expect(removeDuplicates(arr)).to.not.equal(arr);
    arr = [];
    expect(removeDuplicates(arr)).to.not.equal(arr);
    arr = [2, 2, 2];
    removeDuplicates(arr);
    expect(arr).to.deep.equal([2, 2, 2]);
  });

  it("Does nothing to arrays that have unique elements.", () => {
    expect(() => removeDuplicates([1, 2, 3])).to.throw;
    expect(() => removeDuplicates([])).to.throw;
  });

});
