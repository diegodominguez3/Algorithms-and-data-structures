//my solution O(n) time (1) space 
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const left_element = array[left];
        const right_element = array[right];
        if (left_element === toMove && right_element !== toMove) {
            swap(left, right, array);
            left++;
            right--;
        } else if (left_element !== toMove && right_element !== toMove) {
            left++;
        } else {
            right--;
        }
    }

    return array;

    function swap(index1, index2, array) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}

//Other solution O(n) time O(1) space
function moveElementToEnd(array, toMove) {
    // Write your code here.
      let left = 0; 
      let right = array.length - 1;
      while(left < right) {
          while(left < right && array[right] == toMove) {
              right--;
          } 
          if(array[left] === toMove) {
              swap(left, right, array); 
          }
          left++; 
      }
      return array;
      
      function swap(index1, index2, array) {
          const temp = array[index1]; 
          array[index1] = array[index2]; 
          array[index2] = temp; 
      }
  }