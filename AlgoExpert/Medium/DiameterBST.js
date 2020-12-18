//first solution o(n) time
function binaryTreeDiameter(tree) {
    // Write your code here.
    let result = 1;
    dfs(tree)

    function dfs(node) {
        if (!node) {
            return 0;
        }
        let l = dfs(node.left);
        let r = dfs(node.right);
        result = Math.max(result, l + r + 1);
        return Math.max(l, r) + 1;
    }

    return result - 1;
}



function binaryTreeDiameter(tree) {
    // Write your code here.
      return getTreeInfo(tree).diameter;
  }

function getTreeInfo(tree) {
    if (tree === null) return new TreeInfo(0, 0);

    const leftTreeData = getTreeInfo(tree.left);
    const rightTreeData = getTreeInfo(tree.right);
    const longestPathThroughRoot = leftTreeData.height + rightTreeData.height;
    const maxDiameter = Math.max(leftTreeData.diameter, rightTreeData.diameter);
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameter);
    const currentHeight = 1 + Math.max(leftTreeData.height, rightTreeData.height);

    return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}