/*
Write a function called 'averagePair'  Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the
target average. There may be more than one pair that matches the average target.

averagePair([1,2,3], 2.5) //returns true
averagePair([1,3,3,5,6], 2.7) //returns false
averagePair([], 4) //returns false

Time Complexity - O(n)
*/

function averagePair(nums, avg) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
      let currAvg = (nums[start] + nums[end]) / 2;
      if (currAvg === avg) {
        return true;
      } else if (currAvg < avg) {
        start++;
      } else {
        end--;
      }
    }
    return false;
  }
  