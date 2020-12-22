// O(n* denoms) time O(n) space
function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    let numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;

    for (let denom of denoms) {
        for (let amount = 1; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
            }
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
