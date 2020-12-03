/*
Longest Peak
array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
output = 6
here are two peaks ([3,4,0] and [0,10,6,5,-1,-3]) 
                    10
            4       /\  
   3 _ _ 3 / \     /  \ 6     3 /
 2 /          \   /    \ 5   2 /
1 /            \ /      \     /
                0     -1 \   /
                          \ /
                          -3

treat each element with adjacent numbers as a peak 
to be a peak this element has to be strictly greater than 
the adjacent elements.
First find all of the peaks and then check the longuest one 
sperate the problem in two.
To find the peak you need at least 3 values
First tree elements and iterate for each element after
1, 2, 3  -- 2 is not a peak 
2, 3, 3  -- 3 is not a peak
3, 3, 4 -- 3 is not a peak
3, 4, 0 -- 4 is a peak
4, 0, 10 -- 0 is not a peak
0, 10, 6 -- 10 is a peak 
... and so on. 
We realize we have two peaks and store their index for future reference. 
Now check the length
*/

//my solution O(n^2) time (worst case i think)  O(1) space
function longestPeak(array) {
    // Write your code here.
    //a peak will have to be of 3 or longer if there are no peaks, then the longest is 0
    let longestPeak = 0;  
    for (let i = 1; i < array.length - 1; i++) {
        const current = array[i]; 
        const left = array[i-1]; 
        const right = array[i+1]; 
        if(left < current && right < current) {
            let leftPointer = i - 1;
            let rightPointer = i + 1;
            longestPeak = Math.max(longestPeak, getLength(array, leftPointer, rightPointer, i));  
        }
    } 
    return longestPeak;  
}
function getLength(array, left, right, peak) {
    let current = peak;
    let length = 1; 
    //check left
    while(left >= 0 && array[left] < array[current]) {
        length++;  
        current = left;
        left--;  
    }
    current = peak; 
    //check right
    while(right < array.length && array[right] < array[current]) {
        length++; 
        current = right;
        right ++; 
    }
    return length; 
}


// O(n) time and O(1) space
function longestPeak(array) {
    // Write your code here.
    let longestPeakLength = 0;
    let i = 1;
    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
        if (!isPeak) {
            i++;
            continue;
        }
        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }
        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }
        const currentPeakLength = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        i = rightIdx;
    }
    return longestPeakLength;
}




