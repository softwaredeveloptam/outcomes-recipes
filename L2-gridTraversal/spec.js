const { expect } = require("chai");
const { gridTraversal } = require("./solution.js");

describe("gridTraversal", () => {
  it("Should handle single item grid for regular row-by-row scan", () => {
    expect(gridTraversal([[1]], "SCAN")).to.deep.equal([1]);
  });
  it("Should handle single item grid for Depth-first traversal", () => {
    expect(gridTraversal([[1]], "DEPTH-FIRST")).to.deep.equal([1]);
  });
  it("Should handle single item grid for Breadth-first traversal", () => {
    expect(gridTraversal([[1]], "BREADTH-FIRST")).to.deep.equal([1]);
  });
  
  it("Should handle single column grid for regular row-by-row scan", () => {
    expect(gridTraversal([[1, 2, 3, 4]], "SCAN")).to.deep.equal([1, 2, 3, 4]);
  });
  it("Should handle single column grid for Depth-first traversal", () => {
    expect(gridTraversal([[1, 2, 3, 4]], "DEPTH-FIRST")).to.deep.equal([1, 2, 3, 4]);
  });
  it("Should handle single column grid for Breadth-first traversal", () => {
    expect(gridTraversal([[1, 2, 3, 4]], "BREADTH-FIRST")).to.deep.equal([1, 2, 3, 4]);
  });
  
  it("Should handle single row grid for regular row-by-row scan", () => {
    expect(gridTraversal([[1], [2], [3], [4]], "SCAN")).to.deep.equal([1, 2, 3, 4]);
  });
  it("Should handle single row grid for Depth-first traversal", () => {
    expect(gridTraversal([[1], [2], [3], [4]], "DEPTH-FIRST")).to.deep.equal([1, 2, 3, 4]);
  });
  it("Should handle single row grid for Breadth-first traversal", () => {
    expect(gridTraversal([[1], [2], [3], [4]], "BREADTH-FIRST")).to.deep.equal([1, 2, 3, 4]);
  });
  
  let get4x4 = () => [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it("Should handle square grid for Breadth-first traversal", () => {
    expect(gridTraversal(get4x4(), "SCAN")).to.deep.equal([
      1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("Should handle square grid for Depth-first traversal", () => {
    let result = gridTraversal(get4x4(), "DEPTH-FIRST");
    expect(result.length).to.equal(9);
    // Depending on how they prioritize the directions, they can get there a few different ways.
    // However, the third item in the list ought to be one of the adjacent corners of the grid.
    expect(result[0]).to.equal(1);
    expect(result[2] == 3 || result[2] == 7).to.be.true;
  });

  it("Should handle square grid for Breadth-first traversal", () => {
    let result = gridTraversal(get4x4(), "BREADTH-FIRST");
    expect(result.length).to.equal(9);
    expect(result[0]).to.equal(1);
    // Do a few spot checks to make sure that some items are where they need to be in terms
    // of generational steps away from the beginning/end.
    expect(result[1] == 2 || result[1] == 4).to.be.true;
    expect(result[2] == 2 || result[2] == 4).to.be.true;
    expect(result[6] == 6 || result[6] == 8).to.be.true;
    expect(result[7] == 6 || result[7] == 8).to.be.true;
    expect(result[8]).to.equal(9);
  });
});
