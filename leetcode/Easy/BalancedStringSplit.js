/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.
Given a balanced string s split it in the maximum amount of balanced strings.
Return the maximum amount of splitted balanced strings.
Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
 */

 function balancedStringSplit(s) {
     let balanced_string_count = 0;
     let letter_counter = 0; 
     for (let i = 0; i < s.length; i++) {
         const current_letter = s[i]; 
         if(current_letter === "R") letter_counter ++; 
         else if(current_letter === "L") letter_counter --; 
         
         if(letter_counter === 0) balanced_string_count ++; 
     }

     return balanced_string_count; 
 }