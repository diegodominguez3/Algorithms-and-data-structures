//O(n) time O(n) space
function balancedBrackets(string) {
  // Write your code here.
	//method using stack
	let stack = [];
	let parentsSet = new Set(['(', ')', '[', ']', '{', '}']); 
	for(let char of string) {
		const peek = stack[stack.length - 1]; 
		if(!parentsSet.has(char))continue; 
		if(char === '(' || char === '{' || char === '[') stack.push(char); 
		else if(stack.length > 0 && peek === '(' && char === ')') stack.pop();
		else if(stack.length > 0 && peek === '[' && char === ']') stack.pop();
		else if(stack.length > 0 && peek === '{' && char === '}') stack.pop();
		else return false;
	}
	return stack.length === 0; 
}
