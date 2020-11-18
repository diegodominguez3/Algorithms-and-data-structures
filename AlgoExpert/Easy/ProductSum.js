// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

//naive recursive solution 
function productSum(array, level = 1) {
    // Write your code here.
      let global_sum = 0; 
      for(let element of array) {
          if(Array.isArray(element)) { 
        global_sum += productSum(element, level + 1); 
      } else {
        global_sum += element; 
      }
    }
    return global_sum * level; 
  }