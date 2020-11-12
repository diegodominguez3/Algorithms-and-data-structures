 //naive solution time: O(n^2) | space: O(1)
 function twoSum1(array, targetSum) {
    // Write your code here. 
      for(let i = 0; i < array.length; i++) {
          for(let j = i + 1; j < array.length; j++) {
              if(array[i] + array[j] === targetSum) {
                  return [array[i],array[j]]; 
              }
          }
      }
      
      return []; 
  }

//sort array solution time: O(nlogn) | space: O(1)

function twoSum2(array, targetSum) {
    // Write your code here.
      let numbers_hash = {}; 
      for(let i = 0; i < array.length; i++) {
          const compliment = targetSum - array[i];
          if(compliment in numbers_hash) {
              return [compliment, array[i]]; 
          }
          numbers_hash[array[i]] = i; 
      }
      return []; 
  }

// my solution time O(n) | space: O(n)

function twoSum3 (nums, target) {
    matches = {}; 
    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]; 
        if(compliment in matches){
            return [matches[compliment], i]; 
        }
        matches[nums[i]] = i; 
    }
}

