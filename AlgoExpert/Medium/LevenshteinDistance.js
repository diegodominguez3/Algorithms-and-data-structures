// O(n*m) time O(n*m) space
function levenshteinDistance(str1, str2) {
    // Write your code here.
    const edits = [];
    for (let i = 0; i < str1.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str2.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }

    for (let row = 1; row < str1.length + 1; row++) {
        for (let col = 1; col < str2.length + 1; col++) {
            
            if (str1[row - 1] === str2[col - 1]) {
                edits[row][col] = edits[row - 1][col - 1];
            } else {
                edits[row][col] = 1 + Math.min(edits[row - 1][col], edits[row][col - 1], edits[row - 1][col - 1]);
            }
        }
    }

    return edits.pop().pop();
}

//O(n*m) time O(Min(n,m)) space
function levenshteinDistance(str1, str2) {
    // Write your code here.
    const small = str1.length < str2.length ? str1 : str2;
    const big = str1.length >= str2.length ? str1 : str2;
    const evenEdits = [];
    const oddEdits = new Array(small.length + 1);
    for (let i = 0; i < small.length + 1; i++) {
        evenEdits.push(i);
    }
    for (let row = 1; row < big.length + 1; row++) {
        let currentEdits;
        let previousEdits;
        if (row % 2 === 1) {
            currentEdits = oddEdits;
            previousEdits = evenEdits;
        } else {
            currentEdits = evenEdits;
            previousEdits = oddEdits;
        }
        currentEdits[0] = row;
        for (let col = 1; col < small.length + 1; col++) {
            if (big[row - 1] === small[col - 1]) {
                currentEdits[col] = previousEdits[col - 1];
            } else {
                currentEdits[col] = 1 + Math.min(currentEdits[col - 1], previousEdits[col], previousEdits[col - 1]);
            }
        }
    }
    return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}