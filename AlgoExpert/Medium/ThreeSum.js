//O(n^2) time 
function threeNumberSum(array, targetSum) {
    // Write your code here.
    let output = [];
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        const current_element = array[i];
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const left_element = array[left];
            const right_element = array[right];
            const current_sum = current_element + left_element + right_element;
            if (current_sum === targetSum) {
                output.push([current_element, left_element, right_element]);
                left++;
                right--;
            } else if (current_sum < targetSum) {
                left++;
            } else if (current_sum > targetSum) {
                right--;
            }
        }
    }
    return output;
}