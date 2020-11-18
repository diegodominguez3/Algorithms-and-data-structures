//time: O(2^n)
function getNthFib(n) {
    // Write your code here.
      if(n === 2) return 1; 
      else if(n === 1) return 0;
      else return (getNthFib(n - 1) + getNthFib(n - 2)); 
  }
//time O(n)
function getNthFib2(n, memoize = {1:0, 2:1}) {
    // Write your code here.
      if(n in memoize) return memoize[n];
      else {
          memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize); 
          return memoize[n]; 
      }
  }
//time O(1)
function getNthFib(n) {
    // Write your code here.
      let last_two = [0, 1]; 
      let count = 3; 
      while (count <= n) {
          const nextFib = last_two[0] + last_two[1]; 
          last_two[0] = last_two[1]; 
          last_two[1] = nextFib; 
          count ++; 
      }
      return (n > 1 ? last_two[1] : last_two[0]); 
  }

