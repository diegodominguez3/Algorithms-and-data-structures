//solution 1 
function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < key; i++) {
        alphabet.push(alphabet[i]);
    }
    let string_arr = string.split('');
    for (let j = 0; j < string_arr.length; j++) {
        string_arr[j] = alphabet[alphabet.indexOf(string_arr[j]) + key];
    }
    return string_arr.join('');
}


// solution 2 
function caesarCipherEncryptor(string, key) {
    // Write your code here.
    //o(n) time o(n) sapce
    let new_letters = [];
    const new_key = key % 26;
    for (let i = 0; i < string.length; i++) {
        new_letters.push(getNewLetter(i, string, new_key));
    }
    return new_letters.join('');
}

function getNewLetter(index, string, key) {
    const new_letter_code = string.charCodeAt(index) + key;
    return new_letter_code <= 122 ? String.fromCharCode(new_letter_code) :
        String.fromCharCode(96 + new_letter_code % 122);
}

//solution 3 
function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const new_key = key % 26;
    let new_letters = [];
    for (let i = 0; i < string.length; i++) {
        new_letters.push(getNewLetter(string[i], new_key, alphabet));
    }
    return new_letters.join('');
}

function getNewLetter(letter, key, alphabet) {
    const new_letter_code = alphabet.indexOf(letter) + key;
    return alphabet[new_letter_code % 26];
}
