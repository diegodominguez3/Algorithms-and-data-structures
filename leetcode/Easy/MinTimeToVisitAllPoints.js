function minTimeToVisitAllPoints (points) {
    let sum = 0;
    for(let i = 1; i < points.length; i++) {
        let xDiff = Math.abs(points[i - 1][0] - points[i][0]); 
        let yDiff = Math.abs(points[i - 1][1] - points[i][1]); 
        sum += Math.max(xDiff, yDiff);
    }
    return sum; 
}