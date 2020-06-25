const { expect } = require("chai");
const { solveGraph } = require("./solution.js");

describe("Solve Graph Extra", () => {
  describe("Complex graph with loops and intermediary nodes", () => {
    const arcs = [
      { start: "a", end: "b" },
      { start: "b", end: "c" },
      { start: "c", end: "a" },
      { start: "c", end: "d" },
      { start: "e", end: "a" },
    ];
    
    it("should reach d", () => {
      expect(solveGraph("a", "d", arcs)).to.be.true;
    });

    it("should never reach nodes with no arcs leading to it", () => {
      expect(solveGraph("a", "e", arcs)).to.be.false;
    });

    it("Should reach all nodes in a loop", () => {
      expect(solveGraph("a", "a", arcs)).to.be.true;
      expect(solveGraph("a", "b", arcs)).to.be.true;
      expect(solveGraph("a", "c", arcs)).to.be.true;
    });
  });
});
