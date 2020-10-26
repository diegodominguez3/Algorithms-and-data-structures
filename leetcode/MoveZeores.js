/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */


 //Naive approach O(n^2)
function moveZeroes(nums) {
    let count = 0; 
    for (let i = nums.length - 1; i >=0; i--) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        count ++; 
      }
    }
    for(let j = 1; j <= count; j++){
      nums.push(0); 
    }
  
    return nums; 
}

//Other approach O(n)
function moveZeroes2(nums){
    let anchor = 0; 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let tempAnchorValue = nums[anchor]; 
            nums[anchor] = nums[i]; 
            nums[i] = tempAnchorValue; 
            anchor ++; 
        }
    }
}

//Other approach O(n)
function moveZeroes3(nums) {
    let helpIndex = 0; 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[helpIndex++] = nums[i]; 
        }
    }
    for(let j = helpIndex; j < nums.length; j++){
        nums[j] = 0; 
    }
    return nums; 
}
console.log(moveZeroes3([0,1,0,3,12]))