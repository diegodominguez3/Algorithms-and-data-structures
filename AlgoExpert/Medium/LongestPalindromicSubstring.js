//Naive Solution
//O(n^3)) time and O(n) space
function longestPalindromicSubstring(string) {
  // Write your code here.
	let longest = '';  
	for(let i = 0; i < string.length; i++) {
		for(let j = i; j < string.length; j++) {
			const substring = string.substring(i,j + 1); 
			if(isPalindrome(substring) && substring.length > longest.length) {
				longest = substring;
			}
		}
	}
	return longest;

	function isPalindrome(string) {
		let left = 0;
		let right = string.length - 1;
		while(left < right) {
			if(string[left] !== string[right]) return false;
			left++;
			right--;
		}
		return true;
	}
}