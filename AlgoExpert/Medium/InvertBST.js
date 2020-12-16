//my solution 
// o(n) time o(depth) or o(log(n)) space
function invertBinaryTree(tree) {
    invertBinaryHelper(tree); 
    return tree; 
    function invertBinaryHelper(node) {
        if(node === null) return; 
        else {
            const temp = node.left; 
            node.left = node.right; 
            node.right = temp; 
        }
        invertBinaryHelper(node.left); 
        invertBinaryHelper(node.right);
    }
}

//other solutions 
//iterative O(n) time O(n) space
function invertBinaryTree(tree) {
    // Write your code here.
    let queue  = [tree]; 
    while(queue.length) {
        current = queue.shift(); 
        if(current === null) continue; 
        swap(current);
        queue.push(current.left); 
        queue.push(current.right); 
    }

    function swap(node) {
        const temp = node.left; 
        node.left = node.right; 
        node.right = temp; 
    }
}

//recursive O(n) time O(log(n)) space
function invertBinaryTree(tree) {
    // Write your code here.
    if(tree === null) return; 
    swapLeftandRight(tree); 
    invertBinaryTree(tree.left); 
    invertBinaryTree(tree.right); 

    function swapLeftandRight(node) {
        const temp = node.left; 
        node.left = node.right; 
        node.right = temp; 
    }
}