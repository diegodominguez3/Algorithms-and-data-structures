//O(n) time and O(n) space
function reverseWordsInString(string) {
  // Write your code here.
	const words = [];
	let startOfWord = 0;
	
	for(let idx = 0; idx <= string.length; idx++) {
		if(string[idx] === ' ' || idx === string.length) {
			words.push(string.substring(startOfWord, idx));
			startOfWord = idx + 1;
		}
	}
	
	return reverseArray(words).join(' '); 
}

function reverseArray(array) {
	let startIdx = 0; 
	let endIdx = array.length - 1; 
	while(startIdx < endIdx) {
		const temp = array[startIdx]; 
		array[startIdx] = array[endIdx];
		array[endIdx] = temp;
		startIdx ++;
		endIdx --; 
	}
	return array;
}