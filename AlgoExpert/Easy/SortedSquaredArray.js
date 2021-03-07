// O(nlogn) time, O(1) space
function sortedSquaredArray(array) {
  // Write your code here.
  if (array.length === 0) return [];
  for (let i = 0; i < array.length; i++) {
    array[i] *= array[i];
  }
  return array.sort((a, b) => a - b);
}

//O(n) time, O(n) space
function sortedSquaredArray(array) {
  // Write your code here.
  if (array.length === 0) return [];
  if (array.length === 1) return [array[0] * array[0]];
  const sortedSquares = new Array(array.length).fill(0);
  let small = 0;
  let large = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[small]) > Math.abs(array[large])) {
      sortedSquares[i] = array[small] * array[small];
      small++;
    } else if (Math.abs(array[small] < Math.abs(array[large]))) {
      sortedSquares[i] = array[large] * array[large];
      large--;
    } else {
      sortedSquares[i] = array[small] * array[small];
      sortedSquares[i - 1] = array[large] * array[large];
      small++;
      large--;
      i--;
    }
  }
  return sortedSquares;
}
