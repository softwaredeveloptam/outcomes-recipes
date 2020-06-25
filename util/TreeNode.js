class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * A helper function to quickly create a TreeNode instance by converting
 * a binary heap (as an array) into a binary tree.
 * The root is located at index 0 and the left and right children are located
 * at 2n + 1 and 2n + 2 respectively. If a tree is imbalanced, empty positions
 * are denoted by undefined. Or more concisely, this converts a flat array that
 * contains the contents each layer of the binary tree successively, and builds a binary tree from that.
 * 
 * e.g. `[1, 2, 3, 4, undefined, 5, 6]` becomes:
 * ```
 *      1
 *     / \
 *    2   3
 *   /   / \
 *  4   5   6
 * ```
 * @param {Array<any>} heap an array to be converted into a TreeNode. 
 * @returns {TreeNode} a binary tree
 */
const treeFromHeap = heap => {
  let impl = (index) => {
    if (index >= heap.length) return null;
    let value = heap[index];
    if (value === undefined) return null;
    return new TreeNode(value, impl(index * 2 + 1), impl(index * 2 + 2));
  };
  return impl(0);
};

module.exports = { TreeNode, treeFromHeap };
