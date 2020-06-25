const { expect } = require("chai");
const { traverseTree } = require("./solution.js");
const { TreeNode, treeFromHeap } = require("../util/TreeNode.js");


const _ = undefined; // Desginates empty node in tree

describe("traverseTree", () => {
  it("Handles empty trees without smoke and sparks.", () => {
    expect(traverseTree(null, 'PRE')).to.deep.equal([]);
  });

  it("Handles happy trees (balanced trees).", () => {
    let tree1 = [
                      1,
      //           /        \
                2,              3,
      //      /   \           /   \
            4,      5,       6,     7,
      //   / \     / \      / \    /  \
          8,  9, 10, 11,  12, 13, 14, 15,
      ];
    expect(traverseTree(treeFromHeap(tree1), 'PRE')).to.deep.equal([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]);
    expect(traverseTree(treeFromHeap(tree1), 'POST')).to.deep.equal([8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1]);
    expect(traverseTree(treeFromHeap(tree1), 'IN')).to.deep.equal([8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]);
  });

  it("Handles imbalanced trees", () => {
    let tree1 = [
                      1,
      //           /        \
                5,              2,
      //      /   \           /   \
            6,     10,       8,    3,
      //   / \     / \      / \   /  \
          _,  7,  _,  _,   _,  9, _,  4,
      ];
    expect(traverseTree(treeFromHeap(tree1), 'PRE')).to.deep.equal([1, 5, 6, 7, 10, 2, 8, 9, 3, 4]);
    expect(traverseTree(treeFromHeap(tree1), 'POST')).to.deep.equal([7, 6, 10, 5, 9, 8, 4, 3, 2, 1]);
    expect(traverseTree(treeFromHeap(tree1), 'IN')).to.deep.equal([6, 7, 5, 10, 1, 8, 9, 2, 3, 4]);

    let tree2 = [
                      'A',
      //           /        \
                _,             'B',
      //      /   \           /   \
            _,      _,       _,   'C',
      //   / \     / \      / \   /  \
          _,  _,  _,  _,   _,  _, _, 'D',
      ];
    expect(traverseTree(treeFromHeap(tree2), 'PRE')).to.deep.equal(['A', 'B', 'C', 'D']);
    expect(traverseTree(treeFromHeap(tree2), 'POST')).to.deep.equal(['D', 'C', 'B', 'A']);
    expect(traverseTree(treeFromHeap(tree2), 'IN')).to.deep.equal(['A', 'B', 'C', 'D']);
  });
});
