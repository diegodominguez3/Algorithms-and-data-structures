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

function binarySearch2(array, target ) {
    // Write your code here.
      return binarySearchHelper(array, target, 0 , array.length - 1); 
  }
function binarySearchHelper (array, target, left, right){
    if(left > right) return -1; 
    const midpoint = Math.floor((left + right)/2); 
    const midvalue = array[midpoint]; 
    if(target === midvalue) return midpoint;
    else if (target < midvalue) {
        return binarySearchHelper(array, target, left, midpoint - 1); 
    } else {
        return binarySearchHelper(array, target, midpoint + 1, right); 
    }
}