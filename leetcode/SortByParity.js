/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

function sortArrayByParity(A) {
    let start = 0;
    let end = A.length -1; 
    
    while(start < end) {
        if(A[start] % 2 > A[end] % 2) {
            let temp = A[start]; 
            A[start] = A[end]; 
            A[end] = temp; 
        }
        if(A[start] % 2 === 0) start ++; 
        if(A[end] % 2 === 1) end --; 
    }
    
    return A; 
};