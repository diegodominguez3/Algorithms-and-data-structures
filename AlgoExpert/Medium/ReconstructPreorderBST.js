// O(n^2) time O(h) space
function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
  if (preOrderTraversalValues.length === 0) return null;

  let currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const value = preOrderTraversalValues[i];
    if (value >= currentValue) {
      rightSubtreeRootIdx = i;
      break;
    }
  }

  let leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  let rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );
  return new BST(currentValue, leftSubtree, rightSubtree);
}

//O(n) time O(h) space
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
  let treeInfo = new TreeInfo(0);
  return reconstructBSTFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
  function reconstructBSTFromRange(lower, upper, values, currentSubtreeInfo) {
    if (currentSubtreeInfo.rootIdx === values.length) return null;
    let rootValue = values[currentSubtreeInfo.rootIdx];
    if (rootValue < lower || rootValue >= upper) return null;
    currentSubtreeInfo.rootIdx += 1;
    let leftSubtree = reconstructBSTFromRange(
      lower,
      rootValue,
      values,
      currentSubtreeInfo
    );
    let rightSubtree = reconstructBSTFromRange(
      rootValue,
      upper,
      values,
      currentSubtreeInfo
    );
    return new BST(rootValue, leftSubtree, rightSubtree);
  }
}
