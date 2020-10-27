function reverse(str){
    //check if string is valid 
    if(!str || str.length < 2 || typeof str !== 'string' ) return 'can not reverse this string'; 
    let reversed = ''; 
    for (let char of str){
        reversed = char + reversed;
    }

    return reversed; 
}

function reverse1(str){
    //check if string is valid 
    if(!str || str.length < 2 || typeof str !== 'string' ) return 'can not reverse this string'; 
    let start = 0; 
    let end = str.length -1; 
    let str_arr = str.split(''); 
    console.log(str_arr); 
    while (start < end) {
        const temp = str_arr[start]; 
        str_arr[start] = str_arr[end]; 
        str_arr[end] = temp; 
        start++; 
        end --; 
    }

    return str_arr.join(''); 
}

