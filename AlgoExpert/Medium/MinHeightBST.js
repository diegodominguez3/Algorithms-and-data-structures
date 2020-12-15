/*
input = [1,2,5,7,10,13,14,15,22] sorted array
output = balanced tree
first initialize a BST with the middle value of the array
divide and conquer technique
add each node with the insert function in a recursive way 
add left node and add right node since we'll be splitting in two subarrays
*/

// Naive method
// O(nlog(n)) time O(n) space
function minHeightBst(array) {
    // Write your code here.
    return minHeightHelper(array, null, 0, array.length - 1); 
    function minHeightHelper(array, bst, start, end) {
        if(start > end) {return;}
        const mid_point = Math.floor((start + end)/2);
        const mid_value = array[mid_point]; 
        if(bst === null) {
            bst = new BST(mid_value); 
        } else {
            bst.insert(mid_value); 
        }
        minHeightHelper(array, bst, start, mid_point - 1); 
        minHeightHelper(array, bst, mid_point + 1, end); 
        return bst; 
    }
}

//second implementation O(n) time O(n) space
function minHeightBst(array) {
     // Write your code here.
    return minHeightHelper(array, null, 0, array.length - 1); 
    function minHeightHelper(array, bst, start, end) {
        if(start > end) {return;}
        const mid_point = Math.floor((start + end)/2);
        const mid_value = array[mid_point]; 
         //instead of adding the value with a log(n) function we'll be adding it manually
        const newBstNode = new BST(mid_value);
        if(bst === null) bst = newBstNode; 
        else {
            if(mid_value < bst.value) {
                bst.left = newBstNode; 
                bst = bst.left
            } else {
                bst.right = newBstNode;
                bst = bst.right;
            }
        }
        minHeightHelper(array, bst, start, mid_point - 1); 
        minHeightHelper(array, bst, mid_point + 1, end); 
        return bst; 
    }
}

//second implementation cleaner version O(n) time O(n) space
function minHeightBst(array) {
    // Write your code here.
   return minHeightHelper(array, 0, array.length - 1); 

   function minHeightHelper(array, start, end) {
       if(start > end) {return;}
       const mid_point = Math.floor((start + end)/2);
       const mid_value = array[mid_point]; 
        //instead of adding the value with a log(n) function we'll be adding it manually
       const bst = new BST(mid_value);
       bst.left = minHeightHelper(array, start, mid_point - 1); 
       bst.right = minHeightHelper(array, mid_point + 1, end); 
       return bst; 
   }
}
