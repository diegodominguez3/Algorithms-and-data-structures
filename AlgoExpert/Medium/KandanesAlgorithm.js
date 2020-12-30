function kadanesAlgorithm(array) {
    // Write your code here.
    let maxSum = array[0];
    let currentSum = maxSum;
    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(currentSum + array[i], array[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}