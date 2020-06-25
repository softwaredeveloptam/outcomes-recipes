const { expect } = require("chai");
const { TreeNode, treeFromHeap } = require('../util/TreeNode.js');  
const { isBalancedTree } = require("./solution.js");

const _ = undefined; // Desginates empty node in tree

const makeListOfSize = (item, size) => {
  let output = [];
  while (size --> 0) {
    output.push(item);
  }
  return output;
};

describe("isBalancedTree", () => {
  it("Handles empty trees without smoke and sparks.", () => {
    expect(isBalancedTree(null)).to.be.true;
  });

  it("Should return true for balanced trees.", () => {
    let tree1 = treeFromHeap(makeListOfSize('A', 1));
    let tree2 = treeFromHeap(makeListOfSize(42, 3));
    let tree3 = treeFromHeap(makeListOfSize([], 7));
    let tree4 = treeFromHeap(makeListOfSize(false, 15));

    expect(isBalancedTree(tree1)).to.be.true;
    expect(isBalancedTree(tree2)).to.be.true;
    expect(isBalancedTree(tree3)).to.be.true;
    expect(isBalancedTree(tree4)).to.be.true;
  });

  it("Should return false for imbalanced trees", () => {
    let tree1 = [
                        1,
      //           /        \
                2,              3,
      //      /   \           /   \
            4,      5,       6,    7,
      //   / \     /        / \   /  \
          8,  9, 10,  _,  11, 12, 13, 14,
      ];
    expect(isBalancedTree(treeFromHeap(tree1))).to.be.false;

    let tree2 = [
                        1,
      //           /        \
                2,              3,
      //      /   \           /   \
            4,      5,       6,    7,
      //   / \       \      / \   /  \
          8,  9,  _, 10,  11, 12, 13, 14,
      ];
    expect(isBalancedTree(treeFromHeap(tree2))).to.be.false;
    
    // No single-child nodes
    let tree3 = [
                        1,
      //           /        \
                2,              3,
      //      /   \           /   \
            4,      5,       6,    7,
      //                    / \   /  \
          _,  _,  _,  _,   8,  9, 10, 11,
      ];
    expect(isBalancedTree(treeFromHeap(tree3))).to.be.false;
  });

  it("Handles a balanced tree with 100 million nodes.", () => {
    let balanced = null;
    for (let i = 0; i < 27; ++i) {
      balanced = new TreeNode(i, balanced, balanced);
    }
    expect(isBalancedTree(balanced)).to.be.true;
  });

  it("Handles an imbalanced tree with 100 million nodes.", () => {
    let imbalanced = new TreeNode('wat', new TreeNode(42, null, null), null);
    for (let i = 0; i < 26; ++i) {
      imbalanced = new TreeNode(i, imbalanced, imbalanced);
    }
    expect(isBalancedTree(imbalanced)).to.be.false;
  });
});
