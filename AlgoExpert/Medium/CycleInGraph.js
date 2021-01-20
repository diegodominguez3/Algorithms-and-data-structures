// O(v + e) time and O(v) space
function cycleInGraph(edges) {
  // Write your code here.
	const numberOfNodes = edges.length; 
  const visited = new Array(numberOfNodes).fill(false); 
	const currentlyInStack = new Array(numberOfNodes).fill(false);
	
	for(let node = 0; node < numberOfNodes; node++) {
		if(visited[node]) continue; 
		const containsCycle = isNodeInCycle(edges, node, visited, currentlyInStack); 
		if(containsCycle) return true;
	}
	return false;
	
	function isNodeInCycle(edges, node, visited, currentlyInStack) {
		visited[node] = true; 
		currentlyInStack[node] = true;
		let neighbors = edges[node]; 
		for(let neighbor of neighbors) {
			if(!visited[neighbor]) {
				let containsCycle = isNodeInCycle(edges, neighbor, visited, currentlyInStack);
				if(containsCycle) return true; 
			} else if(currentlyInStack[neighbor]) return true;
		}
		currentlyInStack[node] = false;
		return false;
  }
}