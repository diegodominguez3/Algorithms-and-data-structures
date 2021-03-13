function powerset(array) {
  // Write your code here.
	const subsets = [[]]; 
	for(let num of array) {
		const length = subsets.length; 
		for(let i = 0; i < length; i++) {
			let currSubset = subsets[i]; 
			subsets.push(currSubset.concat(num)); 
		}
	}
	return subsets;
}