//My approach rightmost traversal
// O(n) time O(n) space
function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const largests = dfsRight(tree);
  return largests[k - 1];
}

function dfsRight(node, array = []) {
  if (node === null) return;
  dfsRight(node.right, array);
  array.push(node.value);
  dfsRight(node.left, array);
  return array;
}
