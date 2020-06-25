const { TreeNode } = require('../util/TreeNode.js');

/**
 * Generates an array of arrays from the given tree, where each inner array
 * represents successive horizontal layers of the tree.
 * @param {TreeNode} root the root of the tree to traverse
 * @returns {Array<Array<any>>} the layers of the tree
 */
const listTreeGenerationsUsingDfs = (root) => {

  let output = [];

  let impl = (currentNode, currentGeneration) => {
    let value = currentNode.value;
    while (currentGeneration >= output.length) {
      output.push([]);
    }
    output[currentGeneration].push(value);
    if (currentNode.left) impl(currentNode.left, currentGeneration + 1);
    if (currentNode.right) impl(currentNode.right, currentGeneration + 1);
  };

  if (root) {
    impl(root, 0);
  }
  
  return output;
};

const listTreeGenerationsUsingBfs = (root) => {
  if (!root) return [];
  let output = [];
  let queue = [{ node: root, generation: 0 }];
  for (let i = 0; i < queue.length; ++i) {
    let { node, generation} = queue[i];
    if (generation >= output.length) output.push([]);
    output[generation].push(node.value);
    if (node.left) queue.push({ node: node.left, generation: generation + 1 });
    if (node.right) queue.push({ node: node.right, generation: generation + 1 });
  }
  return output;
};

const listTreeGenerationsUsingGenerationalBfs = (root) => {
  if (!root) return [];

  let output = [];
  let queue = [root];
  while (queue.length > 0) {
    let currentArray = [];
    let newQueue = [];
    for (let currentNode of queue) {
      currentArray.push(currentNode.value);
      if (currentNode.left) newQueue.push(currentNode.left);
      if (currentNode.right) newQueue.push(currentNode.right);
    }
    queue = newQueue;
    output.push(currentArray);
  }
  return output;
};

module.exports = { 
  listTreeGenerations: listTreeGenerationsUsingGenerationalBfs,
  TreeNode,
};
