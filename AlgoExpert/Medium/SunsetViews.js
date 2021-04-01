//My solution O(n) time and O(n) space
// needs some code cleanup
function sunsetViews(buildings, direction) {
  // Write your code here.
	if(buildings.length === 0) return [];
	let highest;
	let output = []; 
  if(direction === 'EAST') {
		highest = buildings[buildings.length - 1]; 
		output.push(buildings.length - 1); 
		for(let i = buildings.length - 1; i >= 0; i--) {
			const current = buildings[i]; 
			if(current > highest) {
				output.push(i); 
				highest = current; 
			}
		}
		output = output.reverse(); 
	}
	if(direction === 'WEST') {
		highest = buildings[0]; 
		output.push(0); 
		for(let i = 0; i < buildings.length; i++) {
			const current = buildings[i]; 
			if(current > highest) {
				output.push(i); 
				highest = current; 
			}
		}
	} 
	return output; 
}

//Clean solution
//Same time and space complexity 
function sunsetViews(buildings, direction) {
  // Write your code here.
	const buildingsWithView = [];
	const steps = direction === 'WEST' ? 1 : -1;
	let i = direction === 'WEST' ? 0 : buildings.length - 1;
	let highest = 0;
	while(i >= 0 && i < buildings.length) {
		const current = buildings[i]; 
		if(current > highest) {
			highest = current; 
			buildingsWithView.push(i); 
		}
		i += steps;
	}
	
	if(direction === 'EAST') buildingsWithView.reverse(); 
	return buildingsWithView; 
}