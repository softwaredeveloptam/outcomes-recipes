const { expect } = require("chai");
const { banMethodFrom } = require('../util/tabooUtil.js'); 
const { atoi: actualAtoi } = require("./solution.js");

const atoi = banMethodFrom(actualAtoi, parseInt);

describe("atoi", () => {

  it("Throws error for invalid input.", () => {
    expect(() => atoi()).to.throw;
    expect(() => atoi(2875)).to.throw;
    expect(() => atoi([])).to.throw;
    expect(() => atoi({})).to.throw;
    expect(() => atoi(null)).to.throw;
    expect(() => atoi(new Date())).to.throw;
  });

  it("Should return null for strings with invalid integers", () => {
    expect(atoi('')).to.be.null;
    expect(atoi('-')).to.be.null;
    expect(atoi('eleventy billion')).to.be.null;
    expect(atoi('hyakugojyuichi')).to.be.null;
    expect(atoi('XVI')).to.be.null;
    expect(atoi('867-5309')).to.be.null;
    expect(atoi('--1')).to.be.null;
    expect(atoi('3.14159')).to.be.null;
    expect(atoi('2.0')).to.be.null;
    expect(atoi(' 4 ')).to.be.null;
  });

  it("Should return an integer for valid input", () => {
    expect(atoi('1')).to.equal(1);
    expect(atoi('0')).to.equal(0);
    expect(atoi('13858175')).to.equal(13858175);
    expect(atoi('007')).to.equal(7);
  });

  it("Don't forget the negative numbers!", () => {
    expect(atoi('-51044')).to.equal(-51044);
    expect(atoi('-61109913')).to.equal(-61109913);
  });

  it("-0 should return null because it is far too silly of a number.", () => {
    expect(atoi('-0')).to.be.null;
  });

  it("Big big BIG numbers.", () => {
    expect(atoi('4444444444444444')).to.equal(4444444444444444);
    expect(atoi('9007199254740992')).to.equal(9007199254740992);
    expect(atoi('-9007199254740992')).to.equal(-9007199254740992);
  });
});
