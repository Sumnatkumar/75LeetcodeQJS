// var countBits = function(n) {
//     let dp = new Array(n + 1).fill(0);

//     for (let i = 1; i <= n; i++) {
//         dp[i] = dp[i >> 1] + (i & 1); // Main relation
//     }

//     return dp;
// };
var countBits = function(n) {
    let dp = new Array(n + 1).fill(0);
    let offset = 1;

    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i) offset = i;
        dp[i] = 1 + dp[i - offset];
    }
    return dp;
};
// Example usage
console.log(countBits(2)); // Output: [0, 1, 1]
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]