/*
Given a 6 x 6 2D Array, "arr":
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A is a subset of values with indices falling in this pattern in "arr"'s graphical representation:
a b c
  d
e f g

There are 16 hourglasses in "arr". An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every 
hourglass in "arr", then print the maximum hourglass sum. The array will always be 6 x 6.

Example
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

 The highest hourglass sum is  28 from the hourglass:
0 4 3
  1
8 6 6
*/

//brute force approach O(n^2)
function hourglassSum(arr) {
  let max_sum = -63; //minimum value given the constrains
  let rows = arr.length; 
  let cols = arr[0].length; 

  for(let i = 0; i < (rows - 2); i++){
    for(let j = 0; j < (cols - 2); j++){
      let current_sum = arr[i][j] + arr[i][j + 1] 
      + arr[i][j + 2] + arr[i + 1][j + 1] 
      + arr[i + 2][j] + arr[i + 2][j + 1] 
      + arr[i + 2][j + 2]; 
      max_sum = Math.max(max_sum, current_sum); 
    }
  }
  return max_sum;
}

console.log(hourglassSum([[-9, -9, -9, 1, 1, 1],
                         [ 0, -9,  0, 4, 3, 2],
                         [-9, -9, -9, 1, 2, 3],
                         [ 0,  0,  8, 6, 6, 0],
                         [ 0,  0,  0,-2, 0, 0],
                         [ 0,  0,  1, 2, 4, 0]]));