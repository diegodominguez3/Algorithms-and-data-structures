//O(n*nlog(n)) time and O(n) space
function mergeOverlappingIntervals(array) {
  // Write your code here.
	array = array.sort((a,b) => a[0] - b[0]);
	
	let arrayIdx = 0; 
	const mergedIntervals = [];
	for(arrayIdx; arrayIdx < array.length; arrayIdx ++) {
		const currentInterval = new Array(2); 
		currentInterval[0] = array[arrayIdx][0]; //interval begining
		let intervalEnd = array[arrayIdx][1]; 
		while(arrayIdx < array.length - 1 && intervalEnd >= array[arrayIdx + 1][0]) {
			arrayIdx += 1;
			intervalEnd = Math.max(intervalEnd, array[arrayIdx][1]);
		}
		currentInterval[1] = intervalEnd;
		mergedIntervals.push(currentInterval);
	}
	return mergedIntervals;
}
