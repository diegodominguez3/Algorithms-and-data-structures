//My solution O(n) time O(n) space
function runLengthEncoding(string) {
    // Write your code here.
    const limit = 9;
    let output = [];
    let length = 1;
    for (let i = 1; i <= string.length; i++) {
        if (string[i] !== string[i - 1]) {
            if (length % limit === 0) {
                output.push(`${limit}${string[i - 1]}`);
            } else {
                output.push(`${length % limit}${string[i -1]}`)
            }
            length = 1;
        } else if (length % limit === 0) {
            output.push(`${limit}${string[i]}`);
            length = 1;
        } else {
            length++;
        }
    }

    return output.join("");
}

