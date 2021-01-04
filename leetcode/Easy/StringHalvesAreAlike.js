function halvesAreAlike(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A','E', 'I', 'O', 'U']); 
    let left = 0; 
    let right = s.length - 1; 
    let counter = 0; 
    while(left < right) {
        if(vowels.has(s[left])) counter ++; 
        if (vowels.has(s[right])) counter --; 
        left++;
        right --; 
        console.log(counter);
    }
    return counter === 0; 
};
