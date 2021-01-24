function sumRootToLeaf (root) {
  let bin = '';
  let sum = 0; 
  dfs(root,bin);
  return sum; 
  
  function dfs(node, bin) {
      if(node === null) return;
      bin += node.val
      if(!node.left && !node.right) {
          sum += parseInt(bin, 2);
          return;
      }
      dfs(node.left,bin,sum); 
      dfs(node.right, bin, sum); 
  }
};