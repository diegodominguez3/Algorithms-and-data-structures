/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/


// My solution O(n) 
function thirdMax(nums){
    let max = nums[0];
    let second = -Infinity; 
    let third = -Infinity; 
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === max || nums[i] === second || nums[i] === third){
            continue; 
        }
        if(nums[i] > max){
            third = second; 
            second = max; 
            max = nums[i]; 
        } else 
        if(nums[i] > second){
            third = second; 
            second = nums[i]; 
        } else 
            if(nums[i] > third){
                third = nums[i];
            }
    }
    if(third === -Infinity) {
        return max;
    }
    return third; 
}

// Other solution O(n)
function thirdMax2(nums){
    let thirdMax = -Infinity;
    let secondMax = -Infinity;
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      let num = nums[i];
  
      if (num > max) {
        thirdMax = secondMax;
        secondMax = max;
        max = num;
      } else if (num < max && num > secondMax) {
        thirdMax = secondMax;
        secondMax = num;
      } else if (num < secondMax && num > thirdMax) {
        thirdMax = num;
      }
    }
  
    return thirdMax === -Infinity ? max : thirdMax;
}