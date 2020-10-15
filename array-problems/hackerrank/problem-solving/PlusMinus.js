/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Example
arr = [1,1,0,-1,-1]
There are n=5 elements, two positive, two negative and one zero. Their ratios are 0.400000 , 0.400000 and 
0.2000000. Results are printed as:
0.400000
0.400000
0.200000
*/

//My solution 
function plusMinus(arr) {
    let positiveRatio = 0; 
    let negativeRatio = 0; 
    let zeroesRatio = 0; 

    for(let num of arr){
        if(num > 0) positiveRatio ++; 
        else if (num < 0) negativeRatio ++; 
        else zeroesRatio ++; 
    }

    console.log((positiveRatio/arr.length).toFixed(6));
    console.log((negativeRatio/arr.length).toFixed(6));
    console.log((zeroesRatio/arr.length).toFixed(6));
}

plusMinus([1,1,0,-1,-1]); 