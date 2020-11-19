function binarySearch(array, target) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1; 
    while(start <= end) {
        const midpoint = Math.floor((start + end)/2);
        if(target === array[midpoint]) return midpoint; 
        else if(target < array[midpoint]) {
            end = midpoint - 1; 
        } else {
            start = midpoint + 1; 
        }
    }
    return -1; 
}