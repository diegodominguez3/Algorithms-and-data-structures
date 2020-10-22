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