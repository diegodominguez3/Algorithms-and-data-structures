function groupAnagrams(words) {
  // Write your code here.
	const wordsHash = {};
	for(let idx = 0; idx < words.length; idx ++) {
		const sortedWord = words[idx].split('').sort().join('');
		sortedWord in wordsHash ? wordsHash[sortedWord].push(words[idx]) 
			: wordsHash[sortedWord] = [words[idx]];
	}
	const groupedAnagrams = [];
	for(let sortedWord in wordsHash) {
		groupedAnagrams.push(wordsHash[sortedWord]); 
	}
	return groupedAnagrams; 
}
