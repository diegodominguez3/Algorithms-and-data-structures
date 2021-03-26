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

// O(k*n) time and O(n) space where K is the number of maxSteps and n is the height of the stairs and the size of the memoization structure
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

//iterative solution (dynamic programming)
// O(k*n) time and O(n) space where K is the number of maxSteps and n is the height of the stairs
function staircaseTraversal(height, maxSteps) {
  // Write your code here.
	const ways = new Array(height + 1).fill(0); 
	ways[0] = 1; 
	ways[1] = 1;
	
	for(let i = 2; i < height + 1; i++) {
		let step = 1; 
		while(step <= maxSteps && step <= i) {
			ways[i] += ways[i - step]; 
			step += 1;
		}
	}
	return ways[height]; 
}

//sliding window solution
// O(n) time, O(n) space
function staircaseTraversal(height, maxSteps) {
  // Write your code here.
  let currNumberOfWays = 0;
	let waysToTop = [1]; 
	
	for(let currHeight = 1; currHeight <= height; currHeight ++) {
		let startOfWindow = currHeight - maxSteps - 1;
		let endOfWindow = currHeight - 1;
		if(startOfWindow >= 0) {
			currNumberOfWays -= waysToTop[startOfWindow];
		}
		currNumberOfWays += waysToTop[endOfWindow];
		waysToTop.push(currNumberOfWays); 
	}
	return waysToTop[height]; 
}
