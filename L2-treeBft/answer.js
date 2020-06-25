/**
 * Returns the values of the tree in a flattened list in breadth-first traversal order.
 * @param {TreeNode} root the root node of a tree
 * @returns {Array<any>} the values of the tree nodes 
 */
const treeBft = root => {
  let queue = root === null ? [] : [root];
  let output = [];
  for (let i = 0; i < queue.length; ++i) {
    let current = queue[i];
    output.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return output;
};

module.exports = { treeBft };
