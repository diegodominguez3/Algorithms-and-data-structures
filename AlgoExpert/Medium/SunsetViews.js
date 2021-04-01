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