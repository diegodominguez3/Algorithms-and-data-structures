function findSuccessor(tree, node) {
    // Write your code here.
      const nodes_arr = inOrderTraverse(tree); 
      for(let i = 0; i < nodes_arr.length; i++) {
          if(i === nodes_arr.length - 1) return null; 
          if(nodes_arr[i] === node) return nodes_arr[i + 1]; 
      }
      
    function inOrderTraverse(tree,array = []) {
          if(tree !== null) {
              inOrderTraverse(tree.left, array); 
              array.push(tree);
              inOrderTraverse(tree.right, array); 
          }
          return array; 
      }
  }