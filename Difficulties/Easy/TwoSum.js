/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

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

console.log(twoSum([1,2,3,4], 5)); 