/*
Write a function called 'factorial'  which accepts a number and 
returns the factorial of that number. A factorial is the product
of an integer and all the integers below it; e.g., factorial four 
(4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
Factoria zero (0!) is always 1. 

factorial(1) // returns 1
factorial(2) // returns 2
factorial(4) // returns 24
 */

function factorial(num){
    if(num === 0) return 1; 
    return num * factorial(num -1); 
  }  