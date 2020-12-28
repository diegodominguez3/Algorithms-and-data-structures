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

// O(n) time O(1) space
function firstDuplicateValue(array) {
    // Since all of the values are between 1 and N. 
    for(let i = 0; i < array.length; i++) {
		let map_index = Math.abs(array[i]) - 1; 
		if(array[map_index] < 0) return map_index + 1;
		else array[map_index] *= -1; 
	}
	return -1; 
}