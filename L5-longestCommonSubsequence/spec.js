const { expect } = require("chai");
const { longestCommonSubsequence } = require("./solution.js");

describe("longestCommonSubsequence", () => {
  it("should handle empty lists", () => {
    expect(longestCommonSubsequence([], ["A", "B"])).to.deep.equal([]);
    expect(longestCommonSubsequence(["A", "B"], [])).to.deep.equal([]);
    expect(longestCommonSubsequence([], [])).to.deep.equal([]);
  });

  it("should return empty lists when there's no overlap", () => {
    expect(longestCommonSubsequence(["AAA", "BBB", "CCC"], ["DDD", "EEE", "FFF"])).to.deep.equal([]);
  });
  
  it("should return the whole list when it is identical", () => {
    let items = ["A", "B", "C", "D", "E"];
    expect(longestCommonSubsequence(items.slice(0), items.slice(0))).to.deep.equal(items);
  });
  
  it("should return the longest common subsequence of relatively long lists", () => {
    let items1 = [];
    let items2 = [];
    let expected = [];
    for (let i = 0; i < 2000; ++i) {
      let s = "str" + i;
      if (i % 2 === 0) {
        items1.push(s);
      }

      if (i % 3 === 0) {
        items2.push(s);
      }

      if (i % 2 === 0 && i % 3 === 0) {
        expected.push(s);
      }
    }
    expect(longestCommonSubsequence(items1, items2)).to.deep.equal(expected);
  });
});
