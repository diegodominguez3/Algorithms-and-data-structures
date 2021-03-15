// O(n*log(log(n))) time
function countPrimes(n) {
  let notPrime = new Array(n); 
  let count = 0; 
  for(let i = 2; i < n; i++) {
      if(!notPrime[i]){
          count ++;
          for(let j = 2; i * j < n; j++) {
              notPrime[i*j] = true;
          }
      }
  }
  
  return count; 
};

function countPrimes(n) {
  let primes = new Array(n).fill(true); 
  let count = 0;
  
  for(let i = 2; i * i < n; i++) {
      if(primes[i]) {
          for(let j = i; i * j < n; j++) {
              primes[i*j] = false;
          }
      }
  }
  
  for(let i = 2; i < n; i++){
      if(primes[i]) count += 1;
  }
  return count; 
};