/*
Write a function called 'sameFrequency'. Given two positive integers, find 
out if two numbers have same frequency of digits.  

sameFrequency(182, 281) // returns true
sameFrequency(34, 14) // returns false

Time Complexity - O(n)
 */


function sameFrequency(num1, num2){
    let freq1 = {};
    let freq2 = {}; 
    
    if(num1.toString().length !== num2.toString().length) {
        return false; 
    }
    
    for (let char of num1.toString()) {
        freq1[char] = freq1[char] ? freq1[char] +  1 : 1; 
    }
    
    for (let char of num2.toString()) {
        freq2[char] = freq2[char] ? freq2[char] +  1 : 1; 
    }
  
    for (let key in freq1) {
      if(!(key in freq2)) {
        return false;
      }
      if(freq1[key] !== freq2[key]){
        return false; 
      }
    }
    return true; 
  }