function findSuccessor(tree, node) {
    // Write your code here.
    let nodes_arr = [];
    inOrderTraverse(tree, nodes_arr);
    for (let i = 0; i < nodes_arr.length; i++) {
        if (nodes_arr[i] === node) return nodes_arr[i];
    }
    return -1;

    function inOrderTraverse(tree, array) {
        if (tree !== null) {
            inOrderTraverse(tree.left, array);
            array.push(tree.value);
            inOrderTraverse(tree.right, array);
        }
        return array;
    }
}