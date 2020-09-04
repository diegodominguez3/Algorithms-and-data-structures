/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
formed from iceman. 

validAnagram('cinema', 'iceman') // returns True
validAnagram('truck', 'rock') // returns False

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
 */

function validAnagram(str1, str2){
    let freq1 = {};
    let freq2 = {};
  
    for(let char of str1){
        freq1[char] = freq1[char] ? freq1[char] + 1 : 1;
    }
  
    for(let char of str2){
      freq2[char] = freq2[char] ? freq2[char] + 1: 1;
    }
  
    if(str1.length !== str2.length){
      return false; 
    }
  
    for(let key in freq1){
      if (!(key in freq2)){
        return false;
      }
  
      if (freq1[key] !== freq2[key]) {
        return false;
      }
    }
    return true
}

