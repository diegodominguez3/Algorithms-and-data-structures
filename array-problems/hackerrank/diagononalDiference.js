/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal =  3 + 5 + 9. 
Their absolute difference is | 15 - 17 | = 2. 

*/


//My solution O(n)
function diagonalDiference(arr) {
    let leftDiagonal = 0; 
    let rightDiagonal = 0; 

    for(let i = 0; i < arr.length; i++){
        leftDiagonal += arr[i][i];  
        rightDiagonal += arr[i][(arr.length - 1) - i];
    }

    return Math.abs(leftDiagonal - rightDiagonal); 

}
