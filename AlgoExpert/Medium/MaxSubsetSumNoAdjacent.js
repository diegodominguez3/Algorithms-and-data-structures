/*
array = [7, 10, 12, 7, 9, 14]
output = 7 + 12 + 14 = 3

Dynamic programing 
array of greatest sum with no adjacent numbers
finding all the posibilities with the current index
[7,10,19,19,28,33]

array -> [7, 10, 12, 7, 9, 14]
maxSums -> [7, 10, 19, 19, 28, 33]

maxSums[i] -> max(maxSums[i-1] , maxSums[i -2] + array[i])

*/
// O(n) time O(n) space
function maxSubsetSumNoAdjacent(array) {
    // Write your code here
    if (array.length < 1) return 0;
    else if (array.length === 1) return array[0];
    const maxSums = [array[0], Math.max(array[0], array[1])];
    for (let i = 2; i < array.length; i++) {
        maxSums.push(Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]))
    }

    return maxSums.pop();
}

//cleaning up the last function
// O(n) time O(1) space
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (array.length < 1) return 0;
    else if (array.length === 1) return array[0];

    let second = array[0];
    let first = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
        const current = Math.max(first, second + array[i]);
        second = first;
        first = current;
    }
    return first;
}