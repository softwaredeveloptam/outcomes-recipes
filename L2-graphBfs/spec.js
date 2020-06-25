const { expect } = require("chai");
const { solveGraph } = require("./solution.js");

let buildGraph = edgesFlat => {
  let output = [];
  for (let i = 0; i < edgesFlat.length; i += 2) {
    output.push({ start: edgesFlat[i], end: edgesFlat[i + 1] });
  }
  return output;
}

describe("solveGraph", () => {
  it("should handle an empty graph", () => {
    expect(solveGraph([], "A", "B")).to.be.null;
  });
  
  it("should return 2-item path for 2-item graph", () => {
    expect(solveGraph(buildGraph(["A", "B"]), "A", "B")).to.be.deep.equal(["A", "B"]);
  });
  
  it("should handle graphs with cycles", () => {
    expect(solveGraph(buildGraph([
      "A", "A",
      "B", "C"]), "A", "C")).to.be.deep.null;
    expect(solveGraph(buildGraph([
      "A", "B",
      "B", "A",
      "C", "D"]), "A", "D")).to.be.deep.null;
  });
  
  it("should not find a path when there isn't one", () => {
    expect(solveGraph(buildGraph([
      "A", "A",
      "B", "C"]), "A", "C")).to.be.deep.null;
      
    expect(solveGraph(buildGraph([
      "A", "B",
      "C", "D"]), "A", "D")).to.be.deep.null;
  });
  
  it("should find the shortest path among several choices", () => {
    let graph = [
      "A", "B",
      "Y", "Z",
      
      "B", "D1",
      "D1", "D2",
      "D2", "D3",
      "D3", "D4",
      "D4", "D5",
      "D5", "D6",
      "D6", "Y",
      
      "B", "C1",
      "C1", "C2",
      "C2", "C3",
      "C3", "C4",
      "C4", "Y",
      
      "B", "E1",
      "E1", "E2",
      "E2", "E3",
      "E3", "E4",
      "E4", "E5",
      "E5", "E6",
      "E6", "E7",
      "E7", "E8",
      "E8", "E9",
      "E9", "E10",
      "E10", "Y",
    ];
    expect(solveGraph(buildGraph(graph), "A", "Z")).to.be.deep.equal(
      ["A", "B", "C1", "C2", "C3", "C4", "Y", "Z"]);
  });
});
