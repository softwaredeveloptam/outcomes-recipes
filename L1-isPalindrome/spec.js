const { expect } = require("chai");
const { banMethodFrom } = require('../util/tabooUtil.js');
const { isPalindrome: actualIsPalindrome } = require("./solution.js");

// Do not allow array reversals. 
let isPalindrome = banMethodFrom(actualIsPalindrome, Array, 'reverse');

describe("isPalindrome", () => {

  it("Throws error for invalid string input.", () => {
    expect(() => isPalindrome()).to.throw;
    expect(() => isPalindrome(1)).to.throw;
    expect(() => isPalindrome(null)).to.throw;
    expect(() => isPalindrome([])).to.throw;
    expect(() => isPalindrome(["1"])).to.throw;
    expect(() => isPalindrome({})).to.throw;
  });

  it("Accepts empty strings.", () => {
    expect(isPalindrome("")).to.be.true;
  });

  it("Function produces expected results with valid input.", () => {
    expect(isPalindrome("012345")).to.be.false;
    expect(isPalindrome("01234")).to.be.false;
    expect(isPalindrome("XXYYXX")).to.be.true;
    expect(isPalindrome("XXYXX")).to.be.true;
    expect(isPalindrome("XXYxx")).to.be.false;
    expect(isPalindrome("x x y x  x")).to.be.false;
    expect(isPalindrome(" xxyxx")).to.be.false;
    expect(isPalindrome("xxyyxx ")).to.be.false;
  });
});
