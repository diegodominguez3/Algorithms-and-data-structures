/*
Implement a function called, 'areThereDuplicates' which accepts a variable 
number of arguments, checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern. 

areThereDuplicates(1,2,3) // returns false
areThereDuplicates('a', 'b', 'a') // returns true

Time Complexity - O(n)
 */

function areThereDuplicates(...args) {
    let freq = {};
    for (let el of args) {
      freq[el] = freq[el] ? freq[el] + 1 : 1;
    }
  
    for(let arg in freq){
      if (freq[arg] > 1) {
        return true;
      }
    }
  
    return false; 
  }