//only works on sorted arrays 
function sumZero(arr) {
    let left = 0; 
    let right = arr.length -1; 
    while(left < right) {
        if(arr[left] + arr[right] === 0) return [arr[left], arr[right]];
        else if (arr[left] + arr[right] > 0) right--; 
        else left++;  
    }
}