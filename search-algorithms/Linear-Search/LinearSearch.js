/*
Write a function called 'linearSearch' which accepts an array and a value, and 
returns the index at which the value exists. If the value does not exist in 
the array, return -1.

linearSearc([10,15,20,25,30], 15) // returns 1
linearSearc([100], 100) // returns 0
linearSearc([1,2,3,4,5], 6) // returns -1

Time Complexity - Best case: O(1) , Worst case: O(n)
 */

function linearSearch(array, num){
    for(let i = 0;  i < array.length; i++) {
      if(array[i] === num) return i;
    }
    return -1;
  }