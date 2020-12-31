function uniqueMorseRepresentations(words) {
    const MORSE_CODE_DICT = {   'a':'.-', 'b':'-...', 
                                'c':'-.-.', 'd':'-..', 'e':'.', 
                                'f':'..-.', 'g':'--.', 'h':'....', 
                                'i':'..', 'j':'.---', 'k':'-.-', 
                                'l':'.-..', 'm':'--', 'n':'-.', 
                                'o':'---', 'p':'.--.', 'q':'--.-', 
                                'r':'.-.', 's':'...', 't':'-', 
                                'u':'..-', 'v':'...-', 'w':'.--', 
                                'x':'-..-', 'y':'-.--', 'z':'--..'
                            }
    let seen = new Set();
    if(!words.length) return 0; 
    for(const word of words) {
        if(!seen.has(intoMorse(word))) {
            seen.add(intoMorse(word)); 
        }
    }
    
    return seen.size; 
    
    function intoMorse(word) {
        let new_morse = []; 
        for(const char of word) {
            new_morse.push(MORSE_CODE_DICT[char]); 
        }
        return new_morse.join(""); 
    }
};
