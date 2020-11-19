function findThreeLargestNumbers(array) {
    // Write your code here.
      let largest = null; 
      let second = null; 
      let third = null; 
      
      for(const element of array){
          if(largest === null || largest < element){
              third = second; 
              second = largest; 
              largest = element; 
          } else if (second === null || second < element){
              third = second; 
              second = element;
          } else if(third === null || third < element) {
              third = element; 
          }
      }
      return [third, second, largest];
  }