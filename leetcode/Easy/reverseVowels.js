function reverseVowels(s) {
    let start = 0; 
    let end = s.length - 1; 
    const vowels = "aeiou"; 
    s = s.split(''); 
    
    while(start < end) {
        if(vowels.includes(s[start]) && vowels.includes(s[end])) {
            const temp = s[start]; 
            s[start] = s[end]; 
            s[end] = temp; 
            start++; 
            end--; 
        }
        if(!vowels.includes(s[start])) start++; 
        if(!vowels.includes(s[end])) end--; 
    }
    
    return s.join(''); 
}

console.log(reverseVowels("hello")); 