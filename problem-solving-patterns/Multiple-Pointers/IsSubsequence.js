/*
Write a function called 'isSubsequence' which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second 
string. In other words, the function should check whether the characters in the first 
string appear somewhere in the second string, without their order changing.

isSubsequence('hello', 'hello world') //returns true
isSubsequence('sing', 'string') //returns true
isSubsequence('abc', 'acb') //returns false

Time Complexity - O(n)
*/

function isSubsequence(subsequence, sequence) {
    let i = 0; 
    let j = 0; 
    if(!subsequence) return true; 
    while(j < sequence.length) {
     if(subsequence[i] === sequence[j]) i++;
     if(i === subsequence.length - 1) return true; 
     j++
    }
    return false;
  }
  