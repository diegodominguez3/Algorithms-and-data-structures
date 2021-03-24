// O(k^n) time and O(n) space where K is the number of maxSteps and n is the height of the stairs
function staircaseTraversal(height, maxSteps) {
  // Write your code here.
	return stairsHelper(height, maxSteps); 
	function stairsHelper(height, maxSteps) {
		if(height <= 1) return 1; 
		let ways = 0;
		for(let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
			ways += stairsHelper(height - step, maxSteps); 
		}
		return ways;
	}
}

function staircaseTraversal(height, maxSteps) {
	return stairsHelper(height, maxSteps, {0:1, 1:1}); 
  // Write your code here.
	function stairsHelper(height, maxSteps, memoize) {
		if(height in memoize) return memoize[height];
		
		let ways = 0;
		for(let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
			ways += stairsHelper(height - step, maxSteps, memoize); 
		}
		memoize[height] = ways;
		
		return ways; 
	}
}
