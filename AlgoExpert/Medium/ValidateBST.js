class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    return validateBstHelper(tree, -Infinity, Infinity);
}


//recursively check left and right branches of each node and return 
//if left branch is valid and right branch is valid. 
function validateBstHelper(currentNode, minVal, maxVal) {
    if (currentNode === null) {
        return true;
    }
    if (currentNode.value < minVal || currentNode.value >= maxVal) {
        return false;
    }
    // left branch 
    let leftIsValid = validateBstHelper(currentNode.left, minVal, currentNode.value);
    // right branch
    let rightIsValid = validateBstHelper(currentNode.right, currentNode.value, maxVal);
    return leftIsValid && rightIsValid;
}