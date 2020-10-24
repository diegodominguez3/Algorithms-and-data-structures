/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

Example 2:
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
*/

//My solution  O(n)
function smallerNumberThanCurrent(nums) {
    const sorted_array = [...nums].sort(function(a, b) {return a - b;});
    let sorted_hash = {}; 
    let result_arr = []; 
    for(let i = 0; i < sorted_array.length; i++) {
        if(!(sorted_array[i] in sorted_hash)){
            sorted_hash[sorted_array[i]] = i; 
        }
    }
    
    for(let num of nums) {
        result_arr.push(sorted_hash[num]); 
    }
    
    return result_arr;
}