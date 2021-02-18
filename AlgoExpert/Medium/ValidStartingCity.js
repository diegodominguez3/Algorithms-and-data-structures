//My approach O(n^2) time O(1) space
function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  for (let city = 0; city < distances.length; city++) {
    let currentCity = city;
    let gas = fuel[currentCity] * mpg;
    while (true) {
      if (currentCity === distances.length) {
        return city;
      }
      gas -= distances[currentCity];
      if (gas < 0) {
        break;
      }
      currentCity += 1;
      gas += fuel[currentCity] * mpg;
    }
  }
  return -1;
}

// O(n) time O(1) space
function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  const length = distances.length;
  let milesRemaning = 0;
  let candidate = 0;
  let candidateMilesRemaning = 0;
  for (let i = 1; i < length; i++) {
    const prevDistance = distances[i - 1];
    const prevFuel = fuel[i - 1];
    milesRemaning += prevFuel * mpg - prevDistance;

    if (milesRemaning < candidateMilesRemaning) {
      candidateMilesRemaning = milesRemaning;
      candidate = i;
    }
  }
  return candidate;
}
