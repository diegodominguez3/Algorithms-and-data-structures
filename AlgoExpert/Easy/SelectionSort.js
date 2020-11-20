function selectionSort(array) {
    // Write your code here.
      let currentIndx = 0; 
      while (currentIndx < array.length - 1) {
          let smallestIndx = currentIndx;
          for (let i = currentIndx + 1; i < array.length; i++) {
              if (array[smallestIndx] > array[i]) {
                  smallestIndx = i; 
              }
          }
          swap(currentIndx, smallestIndx, array); 
          currentIndx++; 
      }
      return array; 
  }
  
  function swap(i, j, array) {
      const temp = array[i]; 
      array[i] = array[j]; 
      array[j] = temp; 
}
  