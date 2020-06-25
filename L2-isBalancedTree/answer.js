const { TreeNode } = require('../util/TreeNode.js');

// This file contains 3 valid solutions.

/**
 * Checks if the given binary tree is balanced.
 * @param {TreeNode} root the root of the tree to check
 * @returns {boolean} true if the tree is balanced
 */
const isBalancedTreeCheckLeaves = root => {

  // Traverse the tree while tracking the current depth.
  // The first time you encounter a leaf node, set this variable to the depth.
  // The next time you encounter leaf nodes, check to see if the depth is the same.
  let leafDepth = null;

  let verifyLeafDepthConsistency = (node, depth) => {

    // is leaf?
    if (!node.left && !node.right) {
      
      // is this the first leaf you've seen?
      if (leafDepth === null) {
        leafDepth = depth;
        return true;
      }
      
      // does it match the previous leaf depths?
      return leafDepth === depth;

    }
    
    // Has children. Recurse and verify their leaves.
    if (node.left && node.right) {
      return verifyLeafDepthConsistency(node.left, depth + 1) &&
          verifyLeafDepthConsistency(node.right, depth + 1);
    }

    // if there's only one child, then it's not balanced
    return false;
  };

  if (root) {
    return verifyLeafDepthConsistency(root, 0);
  } else {
    return true; // an empty tree is technically balanced.
  }
};

const isBalancedMinAndMaxDepth = root => {
  // Traverses the tree and finds the maximum or minimum depth of 
  // the tree. The behavior is dictated by whether or not you pass
  // in Math.max or Math.min to the function. This is used to consolidate
  // the depths of each child's branch
  let getMinOrMaxDepth = (node, fn) => {
    if (!node) return 0;
    let leftDepth = getMinOrMaxDepth(node.left, fn);
    let rightDepth = getMinOrMaxDepth(node.right, fn);
    return fn(leftDepth, rightDepth) + 1;
  };

  // Calcualte both the maximum depth and the minimum depth of
  // the tree from the root.
  let minDepth = getMinOrMaxDepth(root, Math.min);
  let maxDepth = getMinOrMaxDepth(root, Math.max);

  // If the deepest and shallowest leaf nodes are identical depths
  // then you know the tree is balanced.
  return minDepth === maxDepth;
};

const isBalancedDepthIfValid = root => {
  
  // This function traverses the tree and recursively finds the depth
  // of the tree node if (and only if) that tree node is balanced.
  // If a tree node is not balanced, null is returned.
  let getDepthIfBalanced = node => {
    if (!node) return 0;
    let leftDepth = getDepthIfBalanced(node.left);
    let rightDepth = getDepthIfBalanced(node.right);
    if (leftDepth === rightDepth && leftDepth !== null) return leftDepth + 1;
    return null;
  };

  // For the final output, we don't care how deep the tree is, just
  // wheter or not it's balanced, as indicated by a non-null value.
  return getDepthIfBalanced(root) !== null;
};

module.exports = { 
  isBalancedTree: isBalancedTreeCheckLeaves,
  TreeNode,
};
