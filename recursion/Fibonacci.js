/*
Write a function called 'fib' which accepts a number and returns the nth
number in the Fibonacci sequence. Recall that the Fibonacci sequence is 
the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 
and 1, and where every number thereafter is equal to the sum of the 
previous two numbers.

fib(4) // returns 3
fib(10) // returns 55
fib(28) // returns 317811
fib(35) // returns 9227465
 */

function fib(num) {
    if(num <= 2){
        return 1;
    }
    return fib(num -2) + fib(num -1); 
}