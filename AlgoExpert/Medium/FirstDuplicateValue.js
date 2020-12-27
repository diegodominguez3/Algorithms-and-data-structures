// O(n) time O(n) space. 
function firstDuplicateValue(array) {
    // Write your code here.
    let num_set = new Set();
    for (let num of array) {
        if (num_set.has(num)) return num;
        num_set.add(num);
    }
    return -1;
}