//O(n + m) time  | O(c) {c being the num of unique characters}
function generateDocument(characters, document) {
  // Write your code here.
  const freqCount = {};

  for (const char of characters) {
    char in freqCount ? (freqCount[char] += 1) : (freqCount[char] = 1);
  }

  for (const char of document) {
    if (!(char in freqCount) || freqCount[char] === 0) return false;
    freqCount[char] -= 1;
  }

  return true;
}
