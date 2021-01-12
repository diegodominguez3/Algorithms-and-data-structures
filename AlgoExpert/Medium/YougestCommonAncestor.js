function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
	const depthOne = getDescendantDepth(descendantOne, topAncestor); 
	const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
	if(depthOne > depthTwo) {
		return backTrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo); 
	} else {
		return backTrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne); 
	}
	
	function backTrackAncestralTree(lowerDescendant, higherDescendant, diff) {
		while (diff > 0) {
			lowerDescendant = lowerDescendant.ancestor;
			diff -= 1;
		}
		while (lowerDescendant != higherDescendant) {
			lowerDescendant = lowerDescendant.ancestor;
			higherDescendant = higherDescendant.ancestor;
		}
		return lowerDescendant; 
	}
	
	function getDescendantDepth(descendant, topAncestor) {
		let depth = 0; 
		while(descendant !== topAncestor) {
			depth += 1;
			descendant = descendant.ancestor; 
		}
		return depth;
	}
}