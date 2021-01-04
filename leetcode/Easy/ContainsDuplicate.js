/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// naive solution O(n^2)
function containsDuplicate(nums){
    let dups = []; 
    for (let num of nums) {
        if(dups.includes(num)) {
            return true; 
        }
        dups.push(num); 
    }
    return false; 
}

// other solution  O(n)
function containsDuplicate2(nums){
    let dups = {}; 
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in dups) return true; 
        dups[nums[i]] = i; 
    }
    return false; 
}

//other soultion 
function containsDuplicate3(nums){
    nums = nums.sort(); 
    for(let i = 0; i < nums.length - 1; i ++){
        if(nums[i] === nums[i+1]) return true; 
    }

    return false; 
}

