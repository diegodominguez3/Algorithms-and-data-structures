function heightChecker (heights) {
  const sorted = [...heights].sort((a,b) => a - b); 
  let count = 0; 
  for(let i = 0; i < heights.length; i ++) {
      if(sorted[i] !== heights[i]) {
          count += 1; 
      }
  }
  return count; 
};