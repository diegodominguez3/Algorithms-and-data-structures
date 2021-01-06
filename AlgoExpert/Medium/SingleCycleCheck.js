function hasSingleCycle(array) {
    // Write your code here.
    let visitedElems = 0;
    const STARTING_IDX = 0;
    let currentIdx = STARTING_IDX;
    while (visitedElems < array.length) {
        if (visitedElems > 0 && currentIdx === STARTING_IDX)
            return false;
        visitedElems += 1
        currentIdx = getNextIdx(currentIdx, array);
    }
    return currentIdx === STARTING_IDX;

    function getNextIdx(idx, arr) {
        const jump = arr[idx];
        const nextIdx = (idx + jump) % arr.length
        return nextIdx >= 0 ? nextIdx : nextIdx + arr.length;
    }
}