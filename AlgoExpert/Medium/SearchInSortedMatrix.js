//naive solution 
// O(n*log(n)) time, O(1) space
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
	for(let i= 0; i < matrix.length; i++) {
		const row = matrix[i];
		if(target >= row[0] && target <= row[row.length - 1]) {
			if(binarySearch(row,target) !== -1) return [i, binarySearch(row, target)]; 
		}
	}
	return [-1, -1];
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1; 
    while(left <= right) {
      const mid = Math.floor((left + right)/2); 
      if(target === array[mid]) return mid;
      else if(target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1; 
  } 
}

//Best solution 
// O(n + m) time and O(1) space
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
	let row = 0; 
	let col = matrix[0].length - 1; 
	while(row < matrix.length && col >= 0) {
		if(matrix[row][col] > target) {
			col -= 1;
		} else if(matrix[row][col] < target) {
			row += 1;
		} else {
			return [row, col]; 
		}
	}
	return [-1,-1]; 
}
