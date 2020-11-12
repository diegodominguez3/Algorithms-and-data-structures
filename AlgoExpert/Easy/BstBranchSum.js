// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      const sums = []; 
      calcSum(root, 0, sums); 
      return sums;
      function calcSum(node, currentSum, sumsArray) {
          if(node === null) return; 
          const newCurrentSum = currentSum + node.value; 
          if(node.left === null && node.right === null){
              sumsArray.push(newCurrentSum); 
          }
          calcSum(node.left, newCurrentSum, sumsArray); 
          calcSum(node.right, newCurrentSum, sumsArray); 
      }
  }