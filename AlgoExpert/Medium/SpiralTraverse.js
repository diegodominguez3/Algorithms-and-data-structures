/*         //eC
[ 1,  2,  3, 4] // sR
[12, 13, 14, 5]
[11, 16, 15, 6]
[10,  9,  8, 7] // eR
sC
iterate through all of the columns on the starting row. 
push elements to result
Result = [1,2,3,4]
iterate through ending column from starting row + 1 to ending Row
push elements to result
Result = [1,2,3,4,5,6,7]
iterate through ending row backwards from ending Column - 1 to starting column
push elements to result
Result = [1,2,3,4,5,6,7,8,9,10]
iterate thorugh startgin row from ending row - 1 to starting row + 1
push elements to result
Result = [1,2,3,4,5,6,7,8,9,10,11,12]
bring all values inwards: sR++, eR--, sC++, eC--
apply same logic again to the new perimeter while sR <= eR and eC <= sC
 */

 //iterative solution O(n) time and O(n) space
function spiralTraverse(array) {
    // Write your code here.
    const result = [];
    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            //handle the edge case when there's a single row 
            //in the middle of the matrix, since we don't want
            //to double count the values of this row since we already
            //counted them in the first for loop
            if (startRow === endRow) break;
            result.push(array[endRow][col]);
        }
        for (let row = endRow - 1; row >= startRow + 1; row--) {
            //handle the edge case when there's a single column 
            //in the middle of the matrix, since we don't want
            //to double count the values of this column since we already
            //counted them in the second for loop
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;
}

//recursive solution O(n) time and O(n) space
function recursiveSpiralTraverse(array) {
    // Write your code here
      const result = []; 
      spiralFill(array, 0, array.length - 1, 0, array[0].length -1, result)
      return result; 
  }
  
  function spiralFill(array, startRow, endRow, startCol, endCol, result){
      if(startRow > endRow || startCol > endCol) return;
      
      for(let col = startCol; col <= endCol; col++) {
              result.push(array[startRow][col]); 
      }
      for(let row = startRow + 1; row <= endRow; row++) {
              result.push(array[row][endCol]); 
      }
      for(let col = endCol - 1; col >= startCol; col--) {
              if(startRow === endRow) break; 
              result.push(array[endRow][col]);
      }
      for(let row = endRow - 1; row >= startRow + 1; row--){
              if(startCol === endCol)break;
              result.push(array[row][startCol]); 
      }
      
      spiralFill(array, startRow+1, endRow-1, startCol+1, endCol-1, result); 
  }
  
