// O(n*denoms) time O(n) space
function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (let denom of denoms) {
        for (let amount = 1; amount < ways.length ; amount++) {
            if (denom <= amount) {
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n];
}