/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

For example, if the string s = 'abcac' and n = 10 , the substring we consider is abcacabcac, the first 10 characters of her 
infinite string. There are 4 occurrences of a in the substring.
*/

function repeatedString(s, n) {  
    let total_full_strings = parseInt(n/s.length); 
    let remainder = n % s.length; 
    let a_counter = 0; 
    
    for (let char of s){
        if(char === 'a') a_counter ++; 
    }

    a_counter *= total_full_strings; 

    for(let i = 0; i < remainder; i++){
        if(s[i] == 'a') a_counter++;
    }

    return a_counter; 
}

console.log(repeatedString('aba', 10)); 