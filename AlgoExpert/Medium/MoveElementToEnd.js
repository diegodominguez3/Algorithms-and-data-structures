//naive solution O(n^2)
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let splice_counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toMove) {
            array.splice(i, 1);
            splice_counter++;
            i--;
        }
    }
    for (let i = 0; i < splice_counter; i++) {
        array.push(toMove);
    }

    return array;
}