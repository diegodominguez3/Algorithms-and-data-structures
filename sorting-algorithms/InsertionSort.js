/*
To sort an array of size n in ascending order:
1: Iterate from arr[1] to arr[n] over the array.
2: Compare the current element (key) to its predecessor.
3: If the key element is smaller than its predecessor, compare it to the elements before. 
   Move the greater elements one position up to make space for the swapped element.
 */
//worst case is O(n^2)
function InsertionSort(nums) {
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        let j = i - 1; 

        while(j >= 0 && nums[j] > current) {
            nums[j+1] = nums[j]; 
            j--; 
        }
        nums[j+1] = current; 
    }

    return nums; 
}
const myArr = [1,4,3,2,7,8,5,6]; 
console.log(InsertionSort(myArr));