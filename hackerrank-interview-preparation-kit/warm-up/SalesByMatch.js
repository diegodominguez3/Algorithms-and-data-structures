/*
Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with 
matching colors there are.

For example, n = 7 there are  socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
There are three odd socks left, one of each color. The number of pairs is 2.

Sample Input
9
10 20 20 10 10 30 50 10 20

Sample Output
3

*/

//my solution (naive approach) O(n)
function sockMerchant(n, ar){
    let socks = {}; 
    let pairs = 0; 

    for(let sock of ar){
        if(sock in socks){
            socks[sock]++; 
        } else {
            socks[sock] = 1; 
        }
    }
    for(let sock in socks) {
        if(socks[sock] >= 2){
            pairs += Math.floor(socks[sock]/2); 
        }
    }
    return pairs; 
}

//refactoring my solution still O(n)
function sockMerchant2(n, ar){
    let socks = new Set();  
    let pairs = 0; 
    for(let sock of ar){
        if(socks.has(sock)){ 
            pairs ++; 
            socks.delete(sock); 
        } else {
            socks.add(sock); 
        }
    }

    return pairs; 
}

console.log(sockMerchant2(9, [10,20,20,10,10,30,50,10,20]))