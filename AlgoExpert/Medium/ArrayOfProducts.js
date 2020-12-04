/*
input: [ 5,  1,  4,  2 ]
output: [ 8, 40, 10, 20 ]
you cannot use division

 */
//naive solution O(n^2) time O(n) space
function arrayOfProducts1(array) {
    // Write your code here.
    const output = [];
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (!(i === j)) {
                product *= array[j];
            }
        }
        output.push(product);
    }
    return output;
}

/*
We can do multiple linear traversals instead of nested
we can calculate everything at the left of the current element
so we make a array of all the left products being.. 
initialize array
[1,1,1,1]
then we know the first element has no left products so stays in 1 since everything times 1 is the same value
current = 5
[1,1,1,1]
then next value is 5
current = 1
[1,5,1,1]
next is the product of 1 and 5
current = 4
[1,5,5,1]
lastly we have 5 * 1 * 4
[1,5,5,20]
and everything at the right with the same approach which ends in 
[8,8,2,1]
finally we do the product of both arrays which is the expected output.
[8,40,10,20]
 */

 // O(n) time and O(3n) space; 
function arrayOfProducts(array) {
    let left_products = Array(array.length).fill(1); 
    let right_products = Array(array.length).fill(1); 
    let result_products = Array(array.length).fill(1); 
    
    let left_running_prod = 1; 
    for(let i = 0; i < array.length; i++) {
        left_products[i] = left_running_prod; 
        left_running_prod *= array[i]; 
    }

    let right_running_prod = 1; 
    for (let i = array.length - 1; i >= 0; i--) {
        right_products[i] = right_running_prod; 
        right_running_prod *= array[i]; 
    }

    for(let i = 0; i < array.length; i++) {
        result_products[i] = left_products[i] * right_products[i]; 
    }

    return result_products;        
}

// Cleaner function for the top solution O(n) time O(n) space
function arrayOfProducts(array) {
    // Write your code here.
    let products = Array(array.length).fill(1); 
      
    let left_running_prod = 1; 
    for(let i = 0; i < array.length; i++) {
        products[i] = left_running_prod; 
        left_running_prod *= array[i]; 
    }
  
    let right_running_prod = 1; 
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] = right_running_prod*products[i]; 
        right_running_prod *= array[i]; 
    }
  
   return products;        
}


 



