function nodeDepths(root) {
    //iterative solution
    // Write your code here.
    let sum_of_depths = 0;
    let stack = [{"node": root, "depth": 0}];
    while(stack.length > 0) {
      const node_info = stack.pop(); 
      const node = node_info["node"]; 
      const depth = node_info["depth"]; 
      if(node === null) continue;
      sum_of_depths += depth; 
      stack.push({"node": node.left, "depth":depth + 1});
      stack.push({"node": node.right, "depth":depth + 1});
    }
  }

  function nodeDepths(root, depth = 0) {
	//recursive solution
  // Write your code here.
	//handle base case of recursion
	if(root === null) return 0; 
	return depth + nodeDepths(root.left, depth + 1)
		+ nodeDepths(root.right, depth + 1);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}