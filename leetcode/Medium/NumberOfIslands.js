function numIslands(grid) {
  let islands = 0;
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
          if(grid[i][j] === '1') {
              islands += 1; 
              bfs(i,j,grid);
          }
      }
  }
  
  return islands;
  
  function bfs(i,j,grid) {
      if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return; 
      grid[i][j] = '0'; 
      bfs(i - 1,j,grid); // up
      bfs(i + 1,j,grid); // down
      bfs(i,j - 1,grid); // left
      bfs(i,j + 1,grid); // right
  }
};