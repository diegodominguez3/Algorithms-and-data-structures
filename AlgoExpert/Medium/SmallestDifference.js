//brute force
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      let min_diff = Infinity; 
      let output = []; 
      for(let el1 of arrayOne){
          for(let el2 of arrayTwo) {
              const current_diff = Math.abs(el1 - el2); 
              if(current_diff < min_diff) {
                  min_diff = current_diff; 
                  output = [el1, el2]; 
              }
          }
      }
      return output; 
  }