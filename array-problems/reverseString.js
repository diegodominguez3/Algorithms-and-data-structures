function reverse(str){
    //check if string is valid 
    if(!str || str.length < 2 || typeof str !== 'string' ) return 'can not reverse this string'; 
    let reversed = ''; 
    for (let char of str){
        reversed = char + reversed;
    }

    return reversed; 
}