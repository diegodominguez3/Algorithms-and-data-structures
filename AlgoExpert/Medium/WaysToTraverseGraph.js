// O(2^(n + m)) time  O(n + m) space
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  if (width === 1 || height === 1) return 1;
  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
}

//O(n*m) time and O(n*m) space
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  const numberOfWays = [];
  for (let i = 0; i < height + 1; i++) {
    numberOfWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      numberOfWays[i].push(0);
    }
  }
  for (let i = 1; i < width + 1; i++) {
    for (let j = 1; j < height + 1; j++) {
      if (i === 1 || j === 1) numberOfWays[j][i] = 1;
      else {
        const waysleft = numberOfWays[j][i - 1];
        const waysup = numberOfWays[j - 1][i];
        numberOfWays[j][i] = waysleft + waysup;
      }
    }
  }

  return numberOfWays[height][width];
}
