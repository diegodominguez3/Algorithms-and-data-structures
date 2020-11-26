//brute force
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let min_diff = Infinity;
    let output = [];
    for (let el1 of arrayOne) {
        for (let el2 of arrayTwo) {
            const current_diff = Math.abs(el1 - el2);
            if (current_diff < min_diff) {
                min_diff = current_diff;
                output = [el1, el2];
            }
        }
    }
    return output;
}

// time will depend of the sorting algorithm  --> O(N(log(n)) + M(log(m))) time and O(1) space 
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let pointer_one = 0;
    let pointer_two = 0;
    let smallest_diff = Infinity;
    let current_diff = Infinity;
    let smallest_pair = [];
    while (pointer_one < arrayOne.length && pointer_two < arrayTwo.length) {
        const num_one = arrayOne[pointer_one];
        const num_two = arrayTwo[pointer_two];
        current_diff = Math.abs(num_one - num_two);
        if (num_one === num_two) {
            return [num_one, num_two];
        } else if (num_one < num_two) {
            pointer_one++;
        } else {
            pointer_two++;
        }
        if (current_diff < smallest_diff) {
            smallest_diff = current_diff;
            smallest_pair = [num_one, num_two];
        }
    }
    return smallest_pair;
}