function binarySearch(nums, target) {
    let left = 0; 
    let right = nums.length - 1;
    
    while(left <= right) {
        const middle_index = Math.floor((right + left) / 2 ); 
        const middle_value = nums[middle_index]; 
        if(middle_value === target) return middle_index; 
        if(middle_value > target) right--; 
        if(middle_value < target) left ++;
    } 
    return -1;
}