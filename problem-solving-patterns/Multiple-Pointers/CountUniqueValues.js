/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in 
the array, but it will always be sorted.

countUniqueValues([1,1,1,2,2,3,4]) // returns 4
countUniqueValues([1]) // returns 1
countUniqueValues([]) //returns 0

Time Complexity - O(n)
*/

function countUniqueValues(arr){
    let slow = 0;
    if(arr.length === 0){
      return 0
    }
    for(let fast = 1; fast < arr.length; fast ++){
      if(arr[slow] !== arr[fast]){
        slow ++
        arr[slow] = arr[fast]
      }
    }
    return slow + 1; 
  }