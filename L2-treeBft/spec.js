const { expect } = require("chai");
const { TreeNode, treeFromHeap } = require('../util/TreeNode.js');  
const { treeBft } = require("./solution.js");

const _ = undefined; // Desginates empty node in tree

describe("treeBft", () => {
  it("Handles empty trees without smoke and sparks.", () => {
    expect(treeBft(null)).to.deep.equal([]);
  });

  it("Handles single-node trees", () => {
    expect(treeBft(new TreeNode(4))).to.deep.equal([4]);
    expect(treeBft(new TreeNode("A"))).to.deep.equal(["A"]);
    expect(treeBft(new TreeNode(false))).to.deep.equal([false]);
    expect(treeBft(new TreeNode(undefined))).to.deep.equal([undefined]);
  });

  it("Handles balanced trees", () => {
    expect(treeBft(treeFromHeap(["A", "B", "C"]))).to.deep.equal(["A", "B", "C"]);
    expect(treeBft(treeFromHeap([1, 2, 3, 4, 5, 6, 7]))).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    expect(treeBft(treeFromHeap([3, 1, 4, 1, 5, 9, 2]))).to.deep.equal([3, 1, 4, 1, 5, 9, 2]);
  });

  it("Handles imbalanced trees", () => {
    expect(treeBft(treeFromHeap([

                      8,
    //            /       \
               4,              9, 
    //       /   \               \
            2,     5,      _,      11,
    //     / \    /               /  \
          1,  3, 6, _,   _,  _, 14,  15

    ]))).to.deep.equal([8, 4, 9, 2, 5, 11, 1, 3, 6, 14, 15]);
  });
});
