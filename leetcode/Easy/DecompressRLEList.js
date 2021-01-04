/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
For each such pair, there are freq elements with value val concatenated in a sublist. 
Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

Example 1:
Input: nums = [1,2,3,4]
Output: [2,4,4,4]

Example 2:
Input: nums = [1,1,2,3]
Output: [1,3,3]
 */

//my solution O(n^2)
function decompressRLEList (nums) {
    let frequency_nums = []; 
    for(let i = 0; i < nums.length; i+= 2){
        const current_pair = []; 
        current_pair.push(nums[i]); 
        current_pair.push(nums[i + 1]);
        for(let k = 1; k <= current_pair[0]; k++){
            frequency_nums.push(current_pair[1]); 
        }
    }
    
    return frequency_nums; 
}