const { TreeNode } = require('../util/TreeNode.js');

/**
 * Generates an array representing pre, post, and in-order traversals
 * of the given tree.
 * @param {TreeNode} root the root of the tree to traverse
 * @param {string} mode The value "PRE", "POST", or "IN" for pre-order,
 *     post-order, and in-order traversals, respectively.
 * @returns {Array<any>} the values of the tree in the given order.
 */
const traverseTree = (root, mode) => {

  let output = [];
  let impl = currentNode => {
    switch (mode) {
      case 'PRE':
        output.push(currentNode.value);
        if (currentNode.left) impl(currentNode.left);
        if (currentNode.right) impl(currentNode.right);
        break;

      case 'POST':
        if (currentNode.left) impl(currentNode.left);
        if (currentNode.right) impl(currentNode.right);
        output.push(currentNode.value);
        break;

      case 'IN':
        if (currentNode.left) impl(currentNode.left);
        output.push(currentNode.value);
        if (currentNode.right) impl(currentNode.right);
        break;

      default:
        throw new Error("Invalid traversal mode: '" + mode + "'.");
    }
  };

  if (root) {
    impl(root);
  }

  return output;
};

module.exports = { 
  traverseTree,
  TreeNode,
};
