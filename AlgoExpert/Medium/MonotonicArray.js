// O(n) time O(1) space
function isMonotonic(array) {
    // Write your code here.
    let is_nondec = true;
    let is_noninc = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) is_nondec = false;
        if (array[i] > array[i - 1]) is_noninc = false;
    }
    return is_nondec || is_noninc;
}