/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations 
are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2].

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed 
as a single line of space-separated integers.

Sample Input
1 2 3 4 5
4

Sample Output
5 1 2 3 4
*/

// My solution O(n)
function leftRotation(a, d) {
    const rotation_sub_arr = a.splice(0,d); 
    return [...a,...rotation_sub_arr]; 
}

// Other solution O(n)
function leftRotation2(a,d) {
    let rotated_arr = []; 
    let i = 0; 
    let rotate_index = d; 

    while(rotate_index < a.length) {
        rotated_arr[i] = a[rotate_index]; 
        i ++;
        rotate_index ++; 
    }

    rotate_index = 0; 
    while(rotate_index < d) {
        rotated_arr[i] = a[rotate_index];
        i ++;
        rotate_index ++;  
    }

    return rotated_arr; 
}

console.log(leftRotation2([1,2,3,4,5], 4)); 