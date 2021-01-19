function pascalTriangle (numRows) {
  const triangle = [];
  if(numRows === 0) return triangle;
  const first_row = [1];
  triangle.push(first_row);
  
  for(let i = 1; i < numRows; i++) {
      const prev_row = triangle[i - 1]; 
      const row = [1];
      for(let j = 1; j < i; j++) {
          row.push(prev_row[j - 1] + prev_row[j]); 
      }
      row.push(1);
      triangle.push(row); 
  }
  return triangle;
};