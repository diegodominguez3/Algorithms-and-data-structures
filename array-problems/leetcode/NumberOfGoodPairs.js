/*
Given an array of integers "nums".
A pair(i,j) is called "good" if nums[i] == nums[j] and i < j. 
Return the number of "good pairs". 

Example 1: 
Input: [1,2,1,1,3]
Output: 4
Explanation There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. 

Example 2: 
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
 */

 function numIdenticalPairs(nums) {
     // formula for good_pairs_count is: good_pairs_count = SUM of N*(N-1)/2
    let repeated_nums = {};
    let good_pairs_count = 0; 

    for (let num of nums) {
        num in repeated_nums ? repeated_nums[num]++ : (repeated_nums[num] = 0);
    }

    for (let num in repeated_nums) {
        const current_pairs_count = repeated_nums[num]; 
        if(current_pairs_count > 0) {
            const current_pairs_sum = (current_pairs_count*(current_pairs_count + 1))/2; 
            good_pairs_count += current_pairs_sum; 
        }
    }

    return good_pairs_count;
 }