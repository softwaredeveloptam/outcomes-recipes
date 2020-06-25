const { expect, use } = require("chai");
const { spy } = require("sinon");
const sinonChai = require("sinon-chai");
const { stringIndexOf } = require(".");

use(sinonChai);

describe("stringIndexOf", () => {

  beforeEach(() => {
    spy(String.prototype, "indexOf");
    spy(String.prototype, "substr");
    spy(String.prototype, "substring");
  });
  
  afterEach(() => {
    expect(String.prototype.indexOf).not.to.have.been.called;
    expect(String.prototype.substr).not.to.have.been.called;
    expect(String.prototype.substring).not.to.have.been.called;
    String.prototype.indexOf.restore();
    String.prototype.substr.restore();
    String.prototype.substring.restore();
  });

  it("Throws error for invalid string inputs.", () => {
    expect(() => stringIndexOf("1", 1)).to.throw;
    expect(() => stringIndexOf("1", null)).to.throw;
    expect(() => stringIndexOf("1", [])).to.throw;
    expect(() => stringIndexOf("1", ["1"])).to.throw;
    expect(() => stringIndexOf("1", {})).to.throw;
    
    expect(() => stringIndexOf(1, "1")).to.throw;
    expect(() => stringIndexOf(null, "1")).to.throw;
    expect(() => stringIndexOf([], "1")).to.throw;
    expect(() => stringIndexOf(["1"], "1")).to.throw;
    expect(() => stringIndexOf({}, "1")).to.throw;
  });

  it("Accepts empty strings.", () => {
    expect(stringIndexOf("012345", "")).to.equal(0);
    expect(stringIndexOf("", "")).to.equal(0);
    expect(stringIndexOf("", "123")).to.equal(-1);
  });

  it("Function produces expected results with valid input.", () => {
    expect(stringIndexOf("012345", "234")).to.equal(2);
    expect(stringIndexOf("012345", "0123")).to.equal(0);
    expect(stringIndexOf("012345", "012345")).to.equal(0);
    expect(stringIndexOf("012345", "0123456")).to.equal(-1);
    expect(stringIndexOf("012345", "01245")).to.equal(-1);
  });
});
