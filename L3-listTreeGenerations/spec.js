const { expect } = require("chai");
const { listTreeGenerations } = require("./solution.js");
const { TreeNode } = require("../util/TreeNode.js");

const _ = undefined; // Desginates empty node in tree

const treeFromHeap = heap => {
  let impl = (index) => {
    if (index >= heap.length) return null;
    let value = heap[index];
    if (value === undefined) return null;
    return new TreeNode(value, impl(index * 2 + 1), impl(index * 2 + 2));
  };
  return impl(0);
};

describe("listTreeGenerations", () => {
  it("Handles empty trees without smoke and sparks.", () => {
    expect(listTreeGenerations(null)).to.deep.equal([]);
  });

  it("Handles happy trees (balanced trees).", () => {
    let tree = [
                      8,
      //           /        \
              13,              6,
      //      /   \           /   \
            11,    10,       14,     5,
      //   / \     / \      / \    /  \
          9,  2,  7, 12,   4,  15, 3,  1,
      ];
    expect(listTreeGenerations(treeFromHeap(tree))).to.deep.equal([
      [8], 
      [13, 6], 
      [11, 10, 14, 5], 
      [9, 2, 7, 12, 4, 15, 3, 1]
    ]);
  });

  it("Handles imbalanced trees.", () => {
    let tree1 = [
                      8,
      //           /        \
              13,              6,
      //      /   \           /   \
            11,     _,       14,     5,
      //   / \     / \      / \
          _,  2,  _,  _,   _,  15,
      ];
    expect(listTreeGenerations(treeFromHeap(tree1))).to.deep.equal([
      [8], 
      [13, 6], 
      [11, 14, 5], 
      [2, 15]
    ]);

    let tree2 = [
                      42,
      //           /        \
                _,            false,
      //      /   \           /     \
            _,      _,      'zoo',   _,
      //   / \     / \      / \
          _,  _,  _,  _,   _,  'wigs',
      ];
    expect(listTreeGenerations(treeFromHeap(tree2))).to.deep.equal([
      [42], 
      [false], 
      ['zoo'], 
      ['wigs']
    ]);
  });
});
