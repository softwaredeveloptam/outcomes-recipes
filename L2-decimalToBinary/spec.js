const { expect } = require("chai");
const { decimalToBinary } = require("./solution.js");

describe("decimalToBinary", () => {
  it("should throw an error for non-number input.", () => {
    expect(() => decimalToBinary()).to.throw;
    expect(() => decimalToBinary('100')).to.throw;
    expect(() => decimalToBinary([])).to.throw;
    expect(() => decimalToBinary({})).to.throw;
  });

  it("should throw an error for bad number input.", () => {
    expect(() => decimalToBinary(NaN)).to.throw;
    expect(() => decimalToBinary(3.14159)).to.throw;
    expect(() => decimalToBinary(-10)).to.throw;
  });

  it("should handle 0", () => {
    expect(decimalToBinary(0)).to.equal('0');
  });
  
  it("should handle all those other numbers", () => {
    expect(decimalToBinary(42)).to.equal('101010');
    expect(decimalToBinary(2385682)).to.equal('1001000110011100010010');
    expect(decimalToBinary(16777215)).to.equal('111111111111111111111111');
    expect(decimalToBinary(16777216)).to.equal('1000000000000000000000000');
  });
});
