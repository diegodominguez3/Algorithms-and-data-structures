//greedy algorithm
// O(nlog(n)) time  O(n) space
function taskAssignment(k, tasks) {
  // Write your code here.
	const sorted_tasks = tasks.sort((a,b) => a - b); 
	let output = []; 
	let left = 0; 
	let right = sorted_tasks.length - 1;
	while(left < right) {
		output.push([left,right]); 
		left ++; 
		right --; 
	}
	return output; 
}