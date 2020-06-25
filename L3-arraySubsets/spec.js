const { expect } = require("chai");
const { listAllSubsets } = require("./solution.js");

let canonicalizeSets = sets => {
  if (!Array.isArray(sets)) return sets;
  for (let set of sets) {
    if (!Array.isArray(set)) return sets;
    for (let str of set) {
      if (typeof str !== 'string') return sets;
    }
    set.sort();
  }

  sets.sort((a, b) => {
    let aLen = a.length;
    let bLen = b.length;
    if (aLen < bLen) return -1;
    if (bLen < aLen) return 1;
    for (let i = 0; i < aLen; ++i) {
      if (a !== b) return a[i].localeCompare(b[i]);
    }
    return 0;
  });

  return sets;
};

const correctSolution = strings => {
  let existingSets = [[]];
  for (let str of strings) {
    let length = existingSets.length;
    for (let i = 0; i < length; ++i) {
      let previouslyExistingSubset = existingSets[i];
      existingSets.push([...previouslyExistingSubset, str])
    }
  }
  return existingSets;
};

let lasWrapped = sets => canonicalizeSets(listAllSubsets(sets));

describe("listAllSubsets", () => {
  it("should handle empty starting arrays.", () => {
    expect(lasWrapped([])).to.deep.equal([[]]);
  });

  it("should handle arrays with one item in them.", () => {
    expect(lasWrapped(["kitties"])).to.deep.equal([[], ["kitties"]]);
    expect(lasWrapped(["axolotlses"])).to.deep.equal([[], ["axolotlses"]]);
  });

  it("should handle three items.", () => {
    expect(lasWrapped(["a", "b", "c"])).to.deep.equal([
      [], 
      ["a"], ["b"], ["c"], 
      ["a", "b"], ["a", "c"], ["b", "c"], 
      ["a", "b", "c"]
    ]);
  });

  it("should handle ten strings without eXpLoDiNg.", () => {
    let strings = [];
    for (let i = 0; i < 10; ++i) {
      strings.push("S" + i);
    }
    expect(lasWrapped(strings)).to.deep.equal(canonicalizeSets(correctSolution(strings)));
  });
});
