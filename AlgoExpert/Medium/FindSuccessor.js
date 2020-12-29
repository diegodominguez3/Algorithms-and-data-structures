function findSuccessor(tree, node) {
    // Write your code here.
    const nodes_arr = inOrderTraverse(tree);
    for (let i = 0; i < nodes_arr.length; i++) {
        if (i === nodes_arr.length - 1) return null;
        if (nodes_arr[i] === node) return nodes_arr[i + 1];
    }

    function inOrderTraverse(tree, array = []) {
        if (tree !== null) {
            inOrderTraverse(tree.left, array);
            array.push(tree);
            inOrderTraverse(tree.right, array);
        }
        return array;
    }
}

// given a bst with nodes with a parent node as property
function findSuccessor(tree, node) {
    // Write your code here
      if( node.right !== null) return leftMostChild(node.right); 
      return rightMostParent(node); 
  }
  
  function leftMostChild(node) {
      let currentNode = node; 
      while(currentNode.left !== null) {
          currentNode = currentNode.left; 
      }
      return currentNode; 
  }
  
  function rightMostParent(node) {
      let currentNode = node; 
      while(currentNode.parent !== null && currentNode.parent.right === currentNode) {
          currentNode = currentNode.parent; 
      }
      return currentNode.parent; 
  }